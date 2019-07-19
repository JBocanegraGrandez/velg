import React from 'react';
import { Link } from 'react-router-dom';
import HeaderSearch from '../header/header_search'

class ProfileShow extends React.Component {
    constructor(props) {
        super(props);
    }

    search(arg) {
        this.props.searchbiz(arg).then((res) => this.props.history.push(`/search`));
    }

    showReviews () {
        let business = {"cat1": "cat1", "cat2": "cat2", "street": "street", "city": "city", "state": "state"}
        return (
          <ul className="reviews-ul">
            <li>
              <div className="review-div">
                <div className="review-div-top">
                  <div className="review-div-details">
                    <div className="review-div-avatar">
                      <div className="review-div-avatar-photo">
                        <Link to={"business/1"}>
                          <img className="review-business-pic" />
                        </Link>
                      </div>
                    </div>
                    <div className="review-div-stats">
                      <div className="review-business-title">
                        <Link className="link" to={'business/1`'}><span>Business Title</span></Link>
                      </div>
                      <div className="review-business-category">
                        <span onClick={() => this.search(business.cat1)} className="link">{business.cat1}</span>, <span onClick={() => this.search(business.cat2)} className="link"> {business.cat2}</span>
                      </div>
                      <div className="review-business-address">
                        <span>{business.street}</span>
                        <span>{business.city}, {business.state}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="review-div-bot">
                    <div className="review-div-bot-content">
                        <div className='review-div-bot-content-header'>
                            <div className="business-review-stars"></div>
                            <span className="business-review-date">Date</span>
                        </div>
                                <p>Finally made it to The House, and it lived up to all of their amazing \
            reviews. Highly recommended for a date night, or a good spot to take the \
            parents. It's small and cozy, so not great for a big group.
        
            What we ordered:
            -Salmon rolls
            -Sea Bass
            -Wasabi noodles
        
            All 5 stars. Would come back to eat the salmon \
            rolls and sea bass again and again.
        
            The service is quick, the food was delicious, the wine was good.
        
    Cannot wait to come back, might be my new favorite SF spot!</p>
                    </div>
                    <div className="review-div-bot-tools"></div>
                </div>
              </div>
            </li>
          </ul>
        );
    }

    render () {
        console.log(this.props)
        return (
            <div>
                <HeaderSearch/>
                <div className="Profile-show-main-wrapper">
                    <div className="Profile-show-top">
                        <div className="Profile-show-top-container">
                            <div className="Profile-show-user-container">
                                <div className="user-avatar">
                                    <div className="user-avatar-wrapper">
                                    </div>
                                </div>
                                <div className="user-details-wrapper">
                                    <div className="user-profile-avatar-dummy"></div>
                                    <div className="user-profile-info">
                                        <h1>{this.props.currentUser.firstName}</h1>
                                        <h3 className="user-location-zipcity">{this.props.currentUser.zipcode}</h3>
                                        <ul className="user-profile-stats">
                                            <li className="friend-count"><span></span><strong>#</strong>  Friends</li>
                                            <li className="review-count"><span></span><strong>#</strong>  Reviews</li>
                                            <li className="photo-count"><span></span><strong>#</strong>  Photos</li>
                                        </ul>
                                    </div>
                                    <div className="user-profile-actions">
                                        <ul className="user-profile-action-link-list">
                                            <li><Link className="link-blank" to={'profile/changepic'}>Change Profile Picture</Link></li>
                                            <li><Link className="link-blank" to={'profile/edit'}>Update Your Profile</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="Profile-show-bot-container">
                            <div className="Profile-show-bot-box-wrapper">
                                <div className="column column-alpha">
                                    <div className="Profile-column-title">
                                        <h3>FirstName's Profile</h3>
                                    </div>
                                    <ul className="Profile-column-items">
                                        <li></li>
                                    </ul>
                                </div>
                                <div className="column column-beta">
                                    <div className="user-details-reviews">
                                        <div className="user-details-reviews-title-wrapper">
                                            <div className="user-details-reviews-title-holder">
                                                <h2 className="user-details-reviews-title-h2">Reviews</h2>
                                            </div>
                                        </div>
                                        {this.showReviews()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div></div>
                </div>
            </div>
        )
    }
}

export default ProfileShow