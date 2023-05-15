import { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Web3 from 'web3';
import { Button, Form, Input } from 'antd/lib';
import get from 'lodash/get';
import { WhiteButton } from 'common-util/Button';
import IpfsHashGenerationModal from '../IpfsHashGenerationModal';
import { RegisterFooter } from '../styles';
import { FormItemHash } from './helpers';

export const FORM_NAME = 'register_form';

const RegisterForm = ({
  account, listType, handleSubmit, handleCancel,
}) => {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [fields, setFields] = useState([]);

  const onGenerateHash = (generatedHash) => {
    setFields([
      {
        name: ['hash'],
        value: generatedHash || null,
      },
    ]);
  };

  const onFinish = (values) => {
    if (account) {
      handleSubmit(values);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo); /* eslint-disable-line no-console */
  };

  const prefillOwnerAddress = () => {
    form.setFieldsValue({ owner_address: account });
  };

  const hashValue = form.getFieldValue('hash');

  return (
    <>
      <Form
        form={form}
        name={FORM_NAME}
        initialValues={{ remember: true }}
        fields={fields}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Owner Address"
          name="owner_address"
          validateFirst
          rules={[
            {
              required: true,
              message: `Please input the address of the ${listType} Owner`,
            },
            () => ({
              validator(_, value) {
                if (Web3.utils.isAddress(value)) return Promise.resolve();
                return Promise.reject(
                  new Error(
                    `Please input a valid address of the ${listType} Owner`,
                  ),
                );
              },
            }),
          ]}
          className="mb-0"
        >
          <Input placeholder="0x862..." />
        </Form.Item>

        <Form.Item className="mb-0">
          <Button
            htmlType="button"
            type="link"
            onClick={prefillOwnerAddress}
            className="pl-0"
          >
            Prefill Address
          </Button>
        </Form.Item>

        <FormItemHash listType={listType} hashValue={hashValue} />

        <Button
          type="primary"
          ghost
          onClick={() => setIsModalVisible(true)}
          className="mb-12"
        >
          Generate Hash & File
        </Button>

        <Form.Item
          label="Price (in Wei)"
          name="price"
          extra="What a requester needs to pay to the mech for each request"
          validateFirst
          rules={[
            {
              required: true,
              message: 'Please input the price the mech charges',
            },
          ]}
          className="mb-0"
        >
          <Input placeholder="10000000000000000" />
        </Form.Item>

        {account ? (
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        ) : (
          <RegisterFooter>
            <p>To mint, connect to wallet</p>
            <WhiteButton onClick={handleCancel}>Cancel</WhiteButton>
          </RegisterFooter>
        )}
      </Form>

      <IpfsHashGenerationModal
        visible={isModalVisible}
        type={listType}
        callback={onGenerateHash}
        handleCancel={() => setIsModalVisible(false)}
      />
    </>
  );
};

RegisterForm.propTypes = {
  account: PropTypes.string,
  listType: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
};

RegisterForm.defaultProps = {
  account: null,
  listType: '',
};

const mapStateToProps = (state) => {
  const account = get(state, 'setup.account') || null;
  return { account };
};

export default connect(mapStateToProps, {})(RegisterForm);
