import React from 'react';
import PropTypes from 'prop-types';

const TextInput = props => (
  <div className="form-group">
    <label>{props.label}</label>
    <input
      type="text"
      onChange={props.onChange}
      className="form-control"
      name={props.name}
      value={props.value}
    />
  </div>
);

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
};

export default TextInput;
