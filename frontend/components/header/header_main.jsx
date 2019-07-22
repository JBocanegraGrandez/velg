import React from 'react';
import HeaderLog from './header_log_container.jsx';
import {Link} from 'react-router-dom'

const headerMain = (props) => (
  <div className="page-header-main">
    <div className="menu-container">
      <div className="menu-left">
        <div className="menu-text-1">
          <button onClick={props.searchbiz('')}>
            <div className="link-blank">
              Write a Review
            </div>
          </button>
        </div>
        {/* <div className="menu-text-2">
          <button>Events</button>
        </div>
        <div className="menu-text-3">
          <button>Talk</button>
        </div> */}
      </div>
      <div>
        <HeaderLog />
      </div>
    </div>
  </div>
);

export default headerMain;
