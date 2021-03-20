import React from 'react';
import PropTypes from 'prop-types';

const BrowserComponent = ({ label, children }) => (
  <div>
    <span className="label-browser-component">{label}</span>
    {children}
  </div>
);

BrowserComponent.propTypes = {
  label: PropTypes.string,
  children: PropTypes.element
};

BrowserComponent.defaultProps = {
  label: 'No component displayed',
  children: <div>No content displayed</div>
};

export default BrowserComponent;
