import React from 'react';
import HeaderSearch from '../header/header_search';
import { Link } from 'react-router-dom';
import BusinessShowBot from "./business_show_bot";
// import BusinessReviews from "../reviews/review_show_form";
import BusinessReviews from "../reviews/review_show_funtional_container";
import HeaderAuth from "../header/header_auth";

class BusinessShowTop extends React.Component {
  // componentDidMount() {
  //   this.props.fetchBusiness(this.props.businessId);
  // }
  //
  // componentWillReceiveProps(nextprops) {
  //   if (this.props.businessId !== nextprops.businessId) {
  //     this.props.fetchBusiness(nextprops.businessId);
  //   }
  // }
  render(){
      // if (this.props.business === undefined){
      //   return null;
      // }
    return(
      <div>
        <HeaderAuth/>
        <div className="business-index-top-shelf">
          <div className="top-shelf-content-container">
            <h1>Best something&nbsp;<span>in Velg</span></h1>
          </div>
        </div>
        <div className="business-index-main">
          <div className="business-index-business-column">
            <ul>
              <li>
                <div className="business-index-single-wrapper">
                  <div className="business-index-pic">
                  </div>
                  <div className="business-index-info">
                    <div className="business-index-single-info-top">
                      <div className="info-left">
                        <h1><span>1.</span>&nbsp;<a className="link">Business Title</a></h1>
                        <div className="business-index-review">
                          <div className="bus-rating"></div>
                        </div>
                        <div className="business-index-tag">
                          <span>$$</span> &nbsp;·&nbsp;
                          <span className="link">Ramen</span>
                        </div>
                      </div>
                      <div className="info-right">
                        <span>Street</span>
                        <span>neighborhood</span>
                        <span>City, State</span>
                      </div>
                    </div>
                    <div className="business-index-single-info-bottom">
                      this is where the first couple of sentences of the review will be shown
                      <a className="link"> read more</a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="business-index-map-column">
          </div>
        </div>
      </div>
    );
  }
}

export default BusinessShowTop;