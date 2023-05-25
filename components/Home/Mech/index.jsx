import React, { useState, useEffect, useMemo } from 'react';
import Web3 from 'web3';
import { Table, Typography } from 'antd/lib';
import { useRouter } from 'next/router';
import { DEFAULT_MECH_CONTRACT_ADDRESS } from 'util/constants';
import { AGENT_MECH_ABI } from 'common-util/AbiAndAddresses';
import { EllipsisMiddle } from 'common-util/List/ListTable/helpers';
import { NA } from 'common-util/constants';
import { notifySuccess } from 'common-util/functions';
import Request from './components/Request';

// Replace the following values with your specific contract information
const WEBSOCKET_PROVIDER = 'wss://rpc.gnosischain.com/wss';

const { Title } = Typography;

const EventListener = () => {
  const [web3Ws, setWeb3Ws] = useState(null);
  const [contractWs, setContractWs] = useState(null);
  const [firstEvents, setFirstEvents] = useState([]);
  const [isFirstEventLoading, setIsFirstEventLoading] = useState(false);

  const [secondEvents, setSecondEvents] = useState([]);
  const [isSecondEventLoading, setIsSecondEventLoading] = useState(false);

  // get the id from the next js router
  const router = useRouter();
  const { id } = router.query;

  const filterOption = useMemo(
    () => ({
      fromBlock: 28127133,
      toBlock: 'latest',
    }),
    [id],
  );

  useEffect(() => {
    const web3Instance = new Web3(
      new Web3.providers.WebsocketProvider(WEBSOCKET_PROVIDER),
    );
    setWeb3Ws(web3Instance);
  }, []);

  const sortEvents = (e) => e.sort((a, b) => b.blockNumber - a.blockNumber);

  useEffect(() => {
    if (web3Ws) {
      const contractInstance = new web3Ws.eth.Contract(
        AGENT_MECH_ABI,
        id || DEFAULT_MECH_CONTRACT_ADDRESS,
      );
      setContractWs(contractInstance);
    }
  }, [web3Ws]);

  const onNewEvent = (event) => {
    const { transactionHash } = event;
    notifySuccess(
      'New event recevied',
      <a
        href={`https://gnosisscan.io/tx/${transactionHash}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Tx
      </a>,
    );
  };

  // Effect hook for listening to the FirstEvent
  useEffect(() => {
    let eventListener;
    const getFirstEvents = async () => {
      setIsFirstEventLoading(true);

      // Listen to new FirstEvent events
      eventListener = contractWs.events.Request({}, (error, event) => {
        if (error) {
          console.error(error);
        } else {
          onNewEvent(event);
          setFirstEvents((prevEvents) => sortEvents([...prevEvents, event]));
        }
      });

      // Get past FirstEvent events
      const pastFirstEvents = await contractWs.getPastEvents(
        'Request',
        filterOption,
      );

      setIsFirstEventLoading(false);
      setFirstEvents(sortEvents(pastFirstEvents));
    };

    if (contractWs) {
      getFirstEvents();
    }

    return () => {
      if (eventListener && eventListener.unsubscribe) {
        eventListener.unsubscribe();
      }
    };
  }, [contractWs]);

  // Effect hook for listening to the SecondEvent
  useEffect(() => {
    let eventListener;
    const getSecondEvents = async () => {
      setIsSecondEventLoading(true);

      // Listen to new SecondEvent events
      eventListener = contractWs.events.Deliver({}, (error, event) => {
        if (error) {
          console.error(error);
        } else {
          onNewEvent(event);
          setSecondEvents((prevEvents) => sortEvents([...prevEvents, event]));
        }
      });

      // Get past SecondEvent events
      const pastSecondEvents = await contractWs.getPastEvents(
        'Deliver',
        filterOption,
      );

      setIsSecondEventLoading(false);
      setSecondEvents(sortEvents(pastSecondEvents));
    };

    if (contractWs) {
      getSecondEvents();
    }

    return () => {
      if (eventListener && eventListener.unsubscribe) {
        eventListener.unsubscribe();
      }
    };
  }, [contractWs]);

  const getDatasource = (eventsPassed) => eventsPassed.map((event, index) => ({
    key: `row-request-${index}`,
    index: index + 1,
    requestId: event.returnValues.requestId,
    sender: event.returnValues.sender,
    data: event.returnValues.data,
  }));

  const requestsDatasource = getDatasource(firstEvents);
  const deliversDatasource = getDatasource(secondEvents);

  return (
    <div>
      <Request />
      <Title level={3}>Requests</Title>
      <Table
        loading={isFirstEventLoading}
        dataSource={requestsDatasource}
        pagination={false}
        rowKey={(x) => x.key}
        columns={[
          {
            title: 'Request Id',
            dataIndex: 'requestId',
            key: 'requestId',
            width: 420,
            render: (text) => (
              <EllipsisMiddle suffixCount={12}>{text}</EllipsisMiddle>
            ),
          },
          {
            title: 'Sender',
            dataIndex: 'sender',
            key: 'sender',
            width: 420,
            render: (text) => {
              if (!text) return NA;
              return <EllipsisMiddle suffixCount={12}>{text}</EllipsisMiddle>;
            },
          },
          {
            title: 'Data',
            dataIndex: 'data',
            key: 'data',
            width: 420,
            render: (text) => {
              if (!text) return NA;
              return (
                <EllipsisMiddle suffixCount={12} isIpfsLink>
                  {text}
                </EllipsisMiddle>
              );
            },
          },
        ]}
      />

      <br />
      <Title level={3}>Delivers</Title>
      <Table
        loading={isSecondEventLoading}
        dataSource={deliversDatasource}
        pagination={false}
        rowKey={(x) => x.key}
        columns={[
          {
            title: 'Request Id',
            dataIndex: 'requestId',
            key: 'requestId',
            render: (text) => (
              <EllipsisMiddle suffixCount={12}>{text}</EllipsisMiddle>
            ),
          },
          {
            title: 'Data',
            dataIndex: 'data',
            key: 'data',
            render: (text) => (
              <EllipsisMiddle suffixCount={12} isIpfsLink>
                {text}
              </EllipsisMiddle>
            ),
          },
        ]}
      />
    </div>
  );
};

export default EventListener;
