import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './input.css';
import ShowIcon from '../img/show.png';
import HideIcon from '../img/hide.png';

const Input = ({ title, type, value, handleChange, className }) => {
  const [inputType, setInputType] = useState(type);

  const displayIcon = () => (
    <button type="button" onClick={() => setInputType(inputType === 'password' ? 'text' : 'password')}>
      <img
        src={inputType === 'password' ? ShowIcon : HideIcon}
        alt={inputType === 'password' ? 'Show password' : 'Hide password'}
      />
    </button>
  );

  return (
    <div className="input-container">
      <input
        id={title}
        placeholder={title}
        type={inputType}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        className={className}
      />
      <label htmlFor={title}>{title}</label>
      {title === 'Password' && displayIcon()}
    </div>
  );
};

Input.propTypes = {
  handleChange: PropTypes.func,
  title: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
};

Input.defaultProps = {
  handleChange: () => { },
  title: 'No title',
  type: 'text',
  value: '',
  className: '',
};

export default Input;
