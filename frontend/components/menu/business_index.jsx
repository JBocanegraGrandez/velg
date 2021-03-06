import React from 'react';
import HeaderSearch from '../header/header_search';
import { Link } from 'react-router-dom';
import BusinessShowBot from "./business_show_bot";
import BusinessMap from "../map/business_map";
// import BusinessReviews from "../reviews/review_show_form";
import BusinessReviews from "../reviews/review_show_funtional_container";
// import HeaderSearch from "../header/header_search";
import main1 from "../../../app/assets/images/thehousemain.jpg";
import main2 from "../../../app/assets/images/main2.jpg";
import main3 from "../../../app/assets/images/main3.jpg";
import main4 from "../../../app/assets/images/main4.jpg";
import main5 from "../../../app/assets/images/main5.jpg";
import main6 from "../../../app/assets/images/main6.jpg";
import main7 from "../../../app/assets/images/main7.jpg";
import main8 from "../../../app/assets/images/main8.jpg";
import main9 from "../../../app/assets/images/main9.jpg";
import main10 from "../../../app/assets/images/main10.jpg";
import main11 from "../../../app/assets/images/main11.jpg";
import main12 from "../../../app/assets/images/main12.jpg";

const coolPojo = {
  "main1": main1,
  "main2": main2,
  "main3": main3,
  "main4": main4,
  "main5": main5,
  "main6": main6,
  "main7": main7,
  "main8": main8,
  "main9": main9,
  "main10": main10,
  "main11": main11,
  "main12": main12,

};
class BusinessIndex extends React.Component {
  // componentDidMount() {
  //   this.props.fetchBusiness(this.props.businessId);
  // }
  //
  // componentWillReceiveProps(nextprops) {
  //   if (this.props.businessId !== nextprops.businessId) {
  //     this.props.fetchBusiness(nextprops.businessId);
  //   }
  // }

  search(arg) {
    this.props.searchbiz(arg).then((res) => this.props.history.push(`/search`));
  }

  render(){
    if (!this.props.businesses[0]) {
      return (
        <div>
          <HeaderSearch/>
          <div className="business-index-top-shelf">
            <div className="top-shelf-content-container">
              <h1>No Result matched&nbsp;<span>in Velg</span></h1>
            </div>
          </div>
          <div className="business-index-main">
            <div className="business-index-business-column">
            </div>
          </div>
      </div>);
    }
    const businesses = this.props.businesses;

    const businessesArr = Object.values(businesses);
      // if (this.props.business === undefined){
      //   return null;
      // }
    return(
      <div>
        <HeaderSearch/>
        <div className="business-index-top-shelf">
          <div className="top-shelf-content-container">
            <h1>Best Results&nbsp;<span>in Velg</span></h1>
          </div>
        </div>
        <div className="business-index-main">
          <div className="business-index-business-column">
            <ul>
              {businessesArr.map((business) => {
                return(
              <li key={business.id}>
                <div className="business-index-single-wrapper">
                  <div className="business-index-pic" style={{ backgroundImage: `url(${coolPojo[business.img]})`, backgroundSize: "cover"}}>
                  </div>
                  <div className="business-index-info">
                    <div className="business-index-single-info-top">
                      <div className="info-left">
                        <h1><span>{businessesArr.indexOf(business) + 1}.</span>&nbsp;<Link to={`business/${business.id}`} className="link">{business.restaurantName}</Link></h1>
                        <div className="business-index-review">
                          <div className="bus-rating"></div>
                        </div>
                        <div className="business-index-tag">
                          <span>$$</span> &nbsp;·&nbsp;
                          <span onClick={() => this.search(business.cat1)}className="link">{business.cat1}</span>, <span onClick={() => this.search(business.cat2)} className="link"> {business.cat2}</span>
                        </div>
                      </div>
                      <div className="info-right">
                        <span>{business.street}</span>
                        <span>{business.neighborhood}</span>
                        <span>{business.city}, {business.state}</span>
                      </div>
                    </div>
                    <div className="business-index-single-info-bottom">
                      this is where the first couple of sentences of the review will be shown
                      <a className="link"> read more</a>
                    </div>
                  </div>
                </div>
              </li>
            );})
            }
            </ul>
          </div>
          <div className="business-index-map-column">
            <BusinessMap businesses={businesses} />
          </div>
        </div>
      </div>
    );
  }
}

export default BusinessIndex;
