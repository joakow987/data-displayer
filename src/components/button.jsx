import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

const Button = ({ type, title, action, className }) => (
  <button type={type} className={`button ${className}`} onClick={action}>
    {title}
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  action: PropTypes.func,
  title: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  action: () => { },
  title: 'No title',
  className: ''
};

export default Button;
