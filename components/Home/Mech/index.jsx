import React, { useState, useEffect, useCallback } from 'react';
import Web3 from 'web3';
import {
  Table, Typography, ConfigProvider, Empty, Skeleton,
} from 'antd';
import { useRouter } from 'next/router';
import { AGENT_MECH_ABI } from 'common-util/AbiAndAddresses';
import { EllipsisMiddle } from 'common-util/List/ListTable/helpers';
import { NA } from 'common-util/constants';
import { notifyError, notifySuccess } from 'common-util/functions';
import Request from './Request';

// Replace the following values with your specific contract information
const WEBSOCKET_PROVIDER = process.env.NEXT_PUBLIC_GNOSIS_WEB_SOCKET;

const { Title } = Typography;

const filterOption = { fromBlock: 28127133, toBlock: 'latest' };

const onNewEvent = (event) => {
  notifySuccess(
    'Event received',
    <a
      href={`https://gnosisscan.io/tx/${event?.transactionHash}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      Tx
    </a>,
  );
};

const onErrorEvent = (error, type) => {
  notifyError('Error occurred while receiving event, please check console');
  console.error(`Error occurred on ${type} event`, error);
};

const EventListener = () => {
  const [web3Ws, setWeb3Ws] = useState(null);
  const [contractWs, setContractWs] = useState(null);

  const [firstEvents, setFirstEvents] = useState([]);
  const [isFirstEventLoading, setIsFirstEventLoading] = useState(false);
  const [isFirstEventError, setIsFirstEventError] = useState(false);

  const [secondEvents, setSecondEvents] = useState([]);
  const [isSecondEventLoading, setIsSecondEventLoading] = useState(false);
  const [isSecondEventError, setIsSecondEventError] = useState(false);

  const { query } = useRouter();
  const id = query?.id;

  useEffect(() => {
    const web3Instance = new Web3(
      new Web3.providers.WebsocketProvider(WEBSOCKET_PROVIDER),
    );
    setWeb3Ws(web3Instance);
  }, []);

  const sortEvents = (e) => e.sort((a, b) => b.blockNumber - a.blockNumber);

  useEffect(() => {
    if (web3Ws && id) {
      const contractInstance = new web3Ws.eth.Contract(AGENT_MECH_ABI, id);
      setContractWs(contractInstance);
    }
  }, [web3Ws, id]);

  // Effect hook for listening to the FirstEvent
  useEffect(() => {
    let eventListener;
    const getFirstEvents = async () => {
      setIsFirstEventLoading(true);

      try {
        // Get past FirstEvent events
        const pastFirstEvents = await contractWs.getPastEvents(
          'Request',
          filterOption,
        );

        setFirstEvents(sortEvents(pastFirstEvents));
      } catch (error) {
        setIsFirstEventError(true);
        console.error('Error on getting past events for `Request`', error);
      } finally {
        setIsFirstEventLoading(false);
      }

      // "Events": Listen to new FirstEvent events
      eventListener = contractWs.events.Request({}, (error, event) => {
        if (error) {
          onErrorEvent(error, 'Request');
        } else {
          onNewEvent(event);
          setFirstEvents((prevEvents) => sortEvents([...prevEvents, event]));
        }
      });
    };

    if (contractWs) {
      getFirstEvents();
    }

    return () => {
      if (eventListener && typeof eventListener.unsubscribe === 'function') {
        eventListener.unsubscribe();
      }
    };
  }, [contractWs]);

  // Effect hook for listening to the SecondEvent
  useEffect(() => {
    let eventListener;
    const getSecondEvents = async () => {
      setIsSecondEventLoading(true);

      try {
        // Get past SecondEvent events
        const pastSecondEvents = await contractWs.getPastEvents(
          'Deliver',
          filterOption,
        );

        setSecondEvents(sortEvents(pastSecondEvents));
      } catch (error) {
        setIsSecondEventError(true);
        console.error('Error on getting past events for `Deliver`', error);
      } finally {
        setIsSecondEventLoading(false);
      }

      // "Events": Listen to new SecondEvent events
      eventListener = contractWs.events.Deliver({}, (error, event) => {
        if (error) {
          onErrorEvent(error, 'Deliver');
        } else {
          onNewEvent(event);
          setSecondEvents((prevEvents) => sortEvents([...prevEvents, event]));
        }
      });
    };

    if (contractWs) {
      getSecondEvents();
    }

    return () => {
      if (eventListener && typeof eventListener.unsubscribe === 'function') {
        eventListener.unsubscribe();
      }
    };
  }, [contractWs]);

  const getRequestAndDeliversData = useCallback(() => {
    const requestsDatasource = firstEvents.map((event, index) => ({
      key: `row-request-${index}`,
      index: index + 1,
      requestId: event.returnValues.requestId,
      sender: event.returnValues.sender,
      requestData: event.returnValues.data,
    }));

    const deliversDatasource = secondEvents.map((event, index) => ({
      key: `row-delivers-${index}`,
      index: index + 1,
      requestId: event.returnValues.requestId,
      sender: event.returnValues.sender,
      deliverData: event.returnValues.data,
    }));

    if (deliversDatasource.length === 0) return requestsDatasource;
    if (requestsDatasource.length === 0) return deliversDatasource;

    const finalDataSource = requestsDatasource.map((request) => {
      const deliver = deliversDatasource.find(
        (d) => d.requestId === request.requestId,
      );

      if (deliver) {
        return { ...request, deliverData: deliver.deliverData };
      }

      return request;
    });

    return finalDataSource;
  }, [firstEvents, secondEvents]);

  const isLoading = isFirstEventLoading || isSecondEventLoading;
  const hasErrors = isFirstEventError || isSecondEventError;

  return (
    <div>
      <ConfigProvider
        renderEmpty={() => {
          if (hasErrors) {
            return <Empty description="Error occurred while fetching events" />;
          }

          if (isLoading) {
            return <Empty description="Loading events..." />;
          }

          return <Empty description="No events found" />;
        }}
      >
        <Request />
        <Title level={3}>Requests</Title>
        <Table
          loading={isFirstEventLoading}
          dataSource={getRequestAndDeliversData()}
          rowKey={(x) => x.key}
          columns={[
            {
              title: 'Request Id',
              dataIndex: 'requestId',
              key: 'requestId',
              width: 300,
              render: (text) => (
                <EllipsisMiddle suffixCount={10}>{text}</EllipsisMiddle>
              ),
            },
            {
              title: 'Sender',
              dataIndex: 'sender',
              key: 'sender',
              width: 300,
              render: (text) => {
                if (!text) return NA;
                return <EllipsisMiddle suffixCount={10}>{text}</EllipsisMiddle>;
              },
            },
            {
              title: 'Request Data',
              dataIndex: 'requestData',
              key: 'requestData',
              width: 300,
              render: (text) => {
                if (!text) return NA;
                return (
                  <EllipsisMiddle suffixCount={10} isIpfsLink>
                    {text}
                  </EllipsisMiddle>
                );
              },
            },
            {
              title: 'Delivers Data',
              dataIndex: 'deliverData',
              key: 'deliverData',
              width: 300,
              render: (text) => {
                if (isSecondEventLoading) {
                  return <Skeleton.Input active />;
                }
                return (
                  <EllipsisMiddle suffixCount={10} isIpfsLink>
                    {text}
                  </EllipsisMiddle>
                );
              },
            },
          ]}
        />
      </ConfigProvider>
    </div>
  );
};

export default EventListener;
