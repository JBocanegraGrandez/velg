import React from 'react';
import SearchMainLittle from "../menu/search_little_container";
import HeaderLog from '../header/header_log_container';
import { Link } from 'react-router-dom';

const ReviewCreateHeader = () => (
  <div className="page-header">
    <div className="head-search-main-wrap">
      <div className="content-container">
        <div className="search-wrap">
          <Link to="/" className="link">
            <div className="header-logo" />
          </Link>
          <div>
            <h2 className="review-header-title">Complete Your Review</h2>
          </div>
          <div className="header-buttons">
            <HeaderLog />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ReviewCreateHeader;
