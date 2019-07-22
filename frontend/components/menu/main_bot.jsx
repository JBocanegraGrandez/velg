import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';



  const MainBot = () => (
    <div className="main-bot-master">
      <div className="main-bot-wrapper">
        <div className="bot-main-title">
          <h2 className="main-bot-index-title">Find the Best Businesses in Town</h2>
        </div>
        <div className="main-bot-3-wrapper">
          <div className="tri-holder">
          <div className="card-business">
            <Link className="link" to="/business/1">
            <div className="card-business-photo">
            </div>
            </Link>
            <div className="card-business-body">
              <div className="card-business-content">
                <Link className="link" to="/business/1"><h3 className="card-content-title">The House</h3></Link>
                <div className="card-stars"></div>
                <div className="card-category">Bars, American Food</div>
                <div className="card-city">San Francisco, CA</div>
              </div>
            </div>
          </div>
          </div>
        <div className="tri-holder">
          <div className="card-business">
            <div className="card-business-photo2">
            </div>
            <div className="card-business-body">
              <div className="card-business-content">
                <Link className="link" to="/business/3"><h3 className="card-content-title">Ananda Fuara</h3></Link>
                <div className="card-stars"></div>
                <div className="card-category">Desserts, Vegan</div>
                <div className="card-city">San Francisco, CA</div>
              </div>
            </div>
          </div>
        </div>
        <div className="tri-holder">
          <div className="card-business">
            <div className="card-business-photo3">
            </div>
            <div className="card-business-body">
              <div className="card-business-content">
                <Link className="link" to="/business/7"><h3 className="card-content-title">Liholiho Yacht Club</h3></Link>
                <div className="card-stars"></div>
                <div className="card-category">Bars, American Food</div>
                <div className="card-city">San Francisco, CA</div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );

export default MainBot;
