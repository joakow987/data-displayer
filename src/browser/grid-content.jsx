import React from 'react';
import PropTypes from 'prop-types';

const GridContent = ({ content, heightClass }) => (
  <div className={`browser-page-square ${heightClass}`}>
    {content}
  </div>
);

GridContent.propTypes = {
  content: PropTypes.element,
  heightClass: PropTypes.string
};

GridContent.defaultProps = {
  content: <span>Empty content of the grid</span>,
  heightClass: ''
};

export default GridContent;
