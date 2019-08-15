import React from 'react';
import HeaderSearch from '../header/header_search';
import { Link } from 'react-router-dom';
import BusinessShowBot from "./business_show_bot";
import BusinessReviews from "../reviews/review_show_funtional_container";
import BusinessMapLittle from "../map/business_map_little";

class BusinessShowTop extends React.Component {
  componentDidMount() {
    this.props.fetchBusiness(this.props.businessId).then(() => {
        this.props.fetchReviewsBusiness(this.props.businessId)
    });
  }

  componentWillReceiveProps(nextprops) {
    if (this.props.businessId !== nextprops.businessId) {
      this.props.fetchBusiness(nextprops.businessId).then(
        () => {
          this.props.fetchReviewsBusiness(this.props.businessId)
        }
      );
    }
  }

  search(arg) {
    this.props.searchbiz(arg).then((res) => this.props.history.push(`/search`));
  }

  render(){
      if (this.props.business === undefined){
        return null;
      }

    let photo1;
    let photo2;
    let photo3;
    if (this.props.business.photos.length === 3) {
      photo1 = <img id="first" className="img-show-roll" src={this.props.business.photos[0]} />
      photo2 = <img id="middle" className="img-show-roll-mid" src={this.props.business.photos[1]} />
      photo3 = <img id="last" className="img-show-roll" src={this.props.business.photos[2]} />
    } else {
      photo1 = <img id="first" src="https://s3-media2.fl.yelpcdn.com/bphoto/8J9ZswfeV5zdVJ5fxQGN5Q/ls.jpg" alt="no-photo" />
      photo2 = <img id="middle" className="img-show-roll-mid" src="https://s3-media3.fl.yelpcdn.com/bphoto/rRqOxkp1SlCpDKOGwBY-fw/ls.jpg" alt="no-photo" />
      photo3 = <img id="last" src="https://s3-media1.fl.yelpcdn.com/bphoto/MS7ZROyC-YKYQRcHocmrKw/o.jpg" alt="no-photo" />
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
                      <a onClick={() => this.search(this.props.business.cat1)}>{this.props.business.cat1}</a>, <a onClick={() => this.search(this.props.business.cat2)}>{this.props.business.cat2}</a>
                    </span>
                  </div>
                </div>
                <div className='right-biz-header'>
                  <div className='review-button-container'>
                    <Link className='link-blank' to={`/business/${this.props.businessId}/create`}>
                      <button className='write-review'>
                        <i className="far fa-star"></i> Write a Review
                      </button>
                    </Link>
                  </div>
                  <div className='social-button-container'>
                  </div>
                </div>
              </div>
              <div className="post-title-container">
                <div className="map-container">
                  <div className="map-info">
                    <div className="map-top">
                      <BusinessMapLittle business={this.props}/>
                    </div>
                    <div className="map-bot">
                      <ul>
                        <li className='relative'>
                        <span><i className="fa fa-map-marker" aria-hidden="true"></i></span>
                          <div className="address-main">
                          {this.props.business.street},<br></br>
                          {this.props.business.city}, {this.props.business.state} {this.props.business.zipcode},<br/>
                          {this.props.business.neighborhood}

                          </div>
                        </li>
                        {/* <li className='relative'>
                          <span></span>
                          <div className="address">
                          {this.props.business.neighborhood}
                          </div>
                        </li> */}
                        {/* <li className='relative'>
                          <span></span>
                          <div className="address">
                          <a>Get directions</a>
                          </div>
                        </li>
                        <li className='relative'>
                          <span></span>
                          <div className="address">
                          <a>(415)440-5446</a>
                          </div>
                        </li>
                        <li className='relative'>
                          <span></span>
                          <div className="address">
                          <a>Send to your Phone</a>
                          </div>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="pics-preview">
                  <div className="pic-box">
                    <div className="pic-roll">
                      {photo1}
                    </div>
                    <div className="pic-roll-main">
                      
                        {photo2}
                      
                    </div>
                    <div className="pic-roll">
                    {photo3}
                    </div>
                  </div>
                  <div className="Pink-background"></div>
                  <button>PREV</button>
                  <button>Next</button>
                  </div>
              </div>
              </div>
            </div>
            <div className="show-bot-main-container">
              <div className="show-bot-reviews-container">
                <BusinessReviews />
              </div>
              <div className="show-bot-business-details-right">
                <BusinessShowBot business={this.props.business}/>
              </div>
            </div>
          </div>

    );
  }
}

export default BusinessShowTop;
