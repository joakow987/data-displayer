import React from 'react';
import PropTypes from 'prop-types';
import './error.css';

const Error = ({ title, className }) => (
  <div className={`error-container ${className}`}>
    <span>{title}</span>
  </div>
);

Error.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string
};

Error.defaultProps = {
  title: 'Error',
  className: ''
};

export default Error;
