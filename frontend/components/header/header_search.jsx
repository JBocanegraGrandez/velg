import React from 'react';
import SearchMainLittle from "../menu/search_little_container";
import HeaderLog from './header_log_container.jsx';
import { Link } from 'react-router-dom';

const HeaderSearch = () => (
  <div className="page-header">
    <div className="head-search-main-wrap">
      <div className="content-container">
        <div className='search-wrap'>
          <Link to="/" className="link">
          <div className="header-logo">
          </div>
          </Link>
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
