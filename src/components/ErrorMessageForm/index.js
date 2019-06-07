import propTypes from 'prop-types';
import React from 'react';

const ErrorMessageForm = ({ message }) => {
  if (message) {
    return <span className="error">{message}</span>;
  }
  return <span />;
};

ErrorMessageForm.propTypes = {
  message: propTypes.string,
};

export default ErrorMessageForm;
