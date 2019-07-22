import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import HeaderMain from '../header/header_main';
import SearchMain from '../menu/search_container';
import MainBot from './main_bot';
import { fetchFilteredBusinesses } from '../../actions/business_actions';


  const SearchIndexForm = () => (
    <div className="master">
      <div className="img-container">
        <HeaderMain searchbiz={fetchFilteredBusinesses}/>
        <div>
          <div className="main-holder">
            <div className="logo">
              <div className="logo-background" />
            </div>

            <SearchMain />

            <div className="items">
              <div>
                <a className="blank-link" href="https://github.com/JBocanegraGrandez">Github</a>
              </div>
              <div>
                <a className="blank-link" href="https://www.linkedin.com/in/j-bocanegra/">
                  LinkedIn
                </a>
              </div>
              <div>
                <a className="blank-link" href="https://jbcode.co/">Portfolio</a>
              </div>
              <div>Resume</div>
            </div>
          </div>
        </div>
      </div>
      <MainBot />
    </div>
  );

export default SearchIndexForm;
