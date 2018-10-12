import React from 'react';
import HeaderLog from './header_log.jsx';
const headerMain = () => (
  <div className="page-header-main">
    <div className="menu-container">
      <div className="menu-left">
        <div className="menu-text-1">
          <button>Write a Review</button>
        </div>
        <div className="menu-text-2">
          <button>Events</button>
        </div>
        <div className="menu-text-3">
          <button>Talk</button>
        </div>
      </div>
      <div className="menu-right">
        <HeaderLog/>
      </div>
    </div>
  </div>
);

export default headerMain;
