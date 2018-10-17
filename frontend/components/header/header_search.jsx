import React from 'react';
import SearchMainLittle from "../menu/search_main_little";
import HeaderLog from './header_log_container.jsx';
const HeaderSearch = () => (
  <div className="page-header">
    <div className="head-search-main-wrap">
      <div className="content-container">
        <div className='search-wrap'>
          <div className="header-logo">
          </div>
          <div className="search-cont">
            <SearchMainLittle />
          </div>
          <div className="header-buttons">
            <HeaderLog />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HeaderSearch;
