import React from 'react';
import HeaderSearch from '../header/header_search';
import { Link } from 'react-router-dom';
import BusinessShowBot from "./business_show_bot";

class BusinessShowTop extends React.Component {
  componentDidMount() {
    this.props.fetchBusiness(this.props.businessId);
  }

  componentWillReceiveProps(nextprops) {
    if (this.props.businessId !== nextprops.businessId) {
      this.props.fetchBusiness(nextprops.businessId);
    }
  }
  render(){
      if (this.props.business === undefined){
        return null;
      }
    return(
      <div>
        <HeaderSearch />
        <div className="show-main-container">
            <div className="top-shelf">
              <div className="top-shelf-gray"></div>
              <div className='title-container'>
                <div className='left-biz-header'>
                  <div className='biz-title-container'>
                    <h1>{this.props.business.restaurant_name}</h1>
                  </div>
                  <div className='rating-container'>
                    <div  className='stars'>
                    </div>
                    <span> 1907 reviews</span>
                  </div>
                  <div className='price-category'>
                    <span className='price-range'>
                      $$$
                    </span>
                    &nbsp;·&nbsp;
                    <span className='category'>
                      <a>Bars</a>, <a>American</a>,<a> Seafood</a>
                    </span>
                  </div>
                </div>
                <div className='right-biz-header'>
                  <div className='review-button-container'>
                    <button className='write-review'>
                      (star) Write a Review
                    </button>
                  </div>
                  <div className='social-button-container'>
                  </div>
                </div>
              </div>
              <div className="post-title-container">
                <div className="map-container">
                  <div className="map-info">
                    <div className="map-top">
                    </div>
                    <div className="map-bot">
                      <ul>
                        <li className='relative'>
                          <span>(I)</span>
                          <div className="address-main">
                          {this.props.business.street},<br></br>
                        {this.props.business.city}, {this.props.business.state} {this.props.business.zipcode}
                          </div>
                        </li>
                        <li className='relative'>
                          <span>(I)</span>
                          <div className="address">
                          {this.props.business.neighborhood}
                          </div>
                        </li>
                        <li className='relative'>
                          <span>(I)</span>
                          <div className="address">
                          <a>Get directions</a>
                          </div>
                        </li>
                        <li className='relative'>
                          <span>(I)</span>
                          <div className="address">
                          <a>(415)440-5446</a>
                          </div>
                        </li>
                        <li className='relative'>
                          <span>(I)</span>
                          <div className="address">
                          <a>Send to your Phone</a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="pics-preview">
                  <div className="pic-box">
                    <div className="pic-roll">
                      <img className="img-show-roll" src="https://s3-media2.fl.yelpcdn.com/bphoto/8J9ZswfeV5zdVJ5fxQGN5Q/ls.jpg">
                      </img>
                    </div>
                    <div className="pic-roll-main">
                      <img className="img-show-roll" src="https://s3-media3.fl.yelpcdn.com/bphoto/rRqOxkp1SlCpDKOGwBY-fw/ls.jpg">
                      </img>
                    </div>
                    <div className="pic-roll">
                      <img className="img-show-roll" src="https://s3-media1.fl.yelpcdn.com/bphoto/MS7ZROyC-YKYQRcHocmrKw/o.jpg">
                      </img>
                    </div>
                  </div>
                  <button>PREV</button>
                  <button>Next</button>
                  </div>
              </div>
              </div>
            </div>
            <div className="show-bot-main-container">
              <div className="show-bot-reviews-container"></div>
              <div className="show-bot-business-details-right">
                <BusinessShowBot business={this.props.business}/>
              </div>
            </div>
          </div>

    );
  }
}

export default BusinessShowTop;
