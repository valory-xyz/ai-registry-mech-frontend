/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Alert, Button } from 'antd';
import { EmptyMessage, RegisterFooter } from 'components/styles';

// ----------- components -----------
export const MyLink = ({ children, href, ...linkProps }) => (
  <Link {...linkProps} href={href}>
    <a href={href}>{children}</a>
  </Link>
);
MyLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};

export const commaMessage = 'Each comma must be followed by a space ("1, 2" not "1,2").';

export const RegisterMessage = ({ handleCancel }) => (
  <RegisterFooter>
    <p>To mint, connect to wallet</p>
    {handleCancel && (
      <Button onClick={handleCancel} ghost type="primary">
        Cancel
      </Button>
    )}
  </RegisterFooter>
);
RegisterMessage.propTypes = { handleCancel: PropTypes.func };
RegisterMessage.defaultProps = { handleCancel: null };

export const ListEmptyMessage = ({ type }) => {
  const getValues = () => {
    switch (type) {
      case 'component':
        return {
          text: 'component',
        };
      case 'operator':
        return {
          text: 'operator',
        };
      case 'agent':
        return {
          text: 'agent',
        };
      default:
        return null;
    }
  };

  const currentType = getValues();

  if (!currentType) {
    return <EmptyMessage>Please check type!</EmptyMessage>;
  }

  return (
    <EmptyMessage data-testid="not-registered-message">
      <div className="empty-message-logo" />
      <p>{`No ${currentType.text}s registered`}</p>
    </EmptyMessage>
  );
};
ListEmptyMessage.propTypes = { type: PropTypes.string };
ListEmptyMessage.defaultProps = { type: null };

// PrintJson
export const PrintJson = ({ value }) => (
  <pre>{JSON.stringify(value || {}, null, 2)}</pre>
);
PrintJson.propTypes = { value: PropTypes.shape({}).isRequired };

// AlertSuccess
export const AlertSuccess = ({ type, information }) => {
  if (!information) return null;
  return (
    <Alert
      message={type ? `${type} minted` : 'Minted successfully'}
      type="success"
      data-testid="alert-info-container"
      showIcon
    />
  );
};
AlertSuccess.propTypes = {
  information: PropTypes.shape({}),
  type: PropTypes.string,
};
AlertSuccess.defaultProps = {
  information: null,
  type: null,
};

// AlertError
export const AlertError = ({ error }) => {
  if (!error) return null;
  return (
    <Alert
      message={error.message}
      data-testid="alert-error-container"
      type="error"
      showIcon
    />
  );
};
AlertError.propTypes = {
  error: PropTypes.shape({ message: PropTypes.string }),
};
AlertError.defaultProps = { error: null };
