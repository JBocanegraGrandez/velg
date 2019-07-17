import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import HeaderMain from '../header/header_main';
import SearchMain from '../menu/search_container';
import MainBot from './main_bot';


  const SearchIndexForm = () => (
    <div className="master">
      <div className="img-container">
        <HeaderMain />
        <div>
          <div className="main-holder">
            <div className="logo">
              <div className="logo-background">
              </div>
            </div>

            <SearchMain />

            <div className="items">
              <div>
                Github
              </div>
              <div>
                LinkedIn
              </div>
              <div>
                Portfolio
              </div>
              <div>
                Resume
              </div>

            </div>
          </div>
        </div>
      </div>
      <MainBot />
    </div>
  );

export default SearchIndexForm;
