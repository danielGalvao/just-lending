import React, { Component } from 'react';
import { ErrorMessageForm } from 'components';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { inputType, label, valueInput, onChangeInput, message } = this.props;
    return (
      <fieldset>
        <label>{label}</label>
        <input
          className={message ? 'error' : ''}
          type={inputType}
          value={valueInput}
          onChange={e => onChangeInput(e)}
        />
        <ErrorMessageForm message={message} />
      </fieldset>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  valueInput: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  message: PropTypes.string,
};

export default Input;
