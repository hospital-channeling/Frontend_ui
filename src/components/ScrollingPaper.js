import React from 'react';
import './ScrollingPaper.css';

const ScrollingPaper = ({ children }) => {
  return (
    <div className="scrolling-paper">
      <div className="scrolling-paper__content">{children}</div>
    </div>
  );
};

export default ScrollingPaper;