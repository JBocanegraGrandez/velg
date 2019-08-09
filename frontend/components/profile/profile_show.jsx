import React from 'react';
import { Link } from 'react-router-dom';
import HeaderSearch from '../header/header_search'

class ProfileShow extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchUser(this.props.userId)
        this.props.fetchReviewsUser(this.props.userId)
    }

    componentWillReceiveProps(nextprops) {
        if (this.props.userId !== nextprops.userId) {
            this.props.fetchUser(nextprops.userId);
            this.props.fetchReviewsUser(nextprops.userId)
        }
    }

    search(arg) {
        this.props.searchbiz(arg).then((res) => this.props.history.push(`/search`));
    }

    showActions() {
        if (this.props.currentUser.id === this.props.targetUser.id) {
            return (
                <div className="user-profile-actions">
                    <ul className="user-profile-action-link-list">
                        <li><Link className="link-blank" to={`${this.props.currentUser.id}/profilepic`}>Change Profile Picture</Link></li>
                        <li><Link className="link-blank" to={`${this.props.currentUser.id}/edit`}>Update Your Profile</Link></li>
                    </ul>
                </div>
            )
        } else {
            return ""
        }
    }
 
    showReviews(reviews) {
        
        if (this.props.reviews[0] === undefined) {
            return null
        }
        return (
          <ul className="reviews-ul">
            {reviews.map((review)=>{
                return(

            <li key={review.id}>
              <div className="review-div">
                <div className="review-div-top">
                  <div className="review-div-details">
                    <div className="review-div-avatar">
                      <div className="review-div-avatar-photo">
                        <Link to={"/business/1"}>
                          <img className="review-business-pic" />
                        </Link>
                      </div>
                    </div>
                    <div className="review-div-stats">
                      <div className="review-business-title">
                        <Link className="link" to={`/business/${review.business.id}`}><span>{review.business.restaurant_name}</span></Link>
                      </div>
                      <div className="review-business-category">
                        <span onClick={() => this.search(review.business.cat1)} className="link">{review.business.cat1}</span>, <span onClick={() => this.search(review.business.cat2)} className="link"> {review.business.cat2}</span>
                      </div>
                      <div className="review-business-address">
                        <span>{review.business.street}</span>
                        <span>{review.business.city}, {review.business.state}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="review-div-bot">
                    <div className="review-div-bot-content">
                        <div className='review-div-bot-content-header'>
                            <div className="business-review-stars"></div>
                            <span className="business-review-date">{review.createdAt.slice(0,10)}</span>
                        </div>
                                <p>{review.body}</p>
                    </div>
                    <div className="review-div-bot-tools"></div>
                </div>
              </div>
            </li>
                )
            }).reverse()}
          </ul>
        );
    }

    render () {
        if (this.props.currentUser === undefined || this.props.targetUser === undefined) {
            return null;
        }
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
                                        <h1>{this.props.targetUser.firstName}</h1>
                                        <h3 className="user-location-zipcity">{this.props.targetUser.zipcode}</h3>
                                        <ul className="user-profile-stats">
                                            <li className="friend-count"><span></span><strong>#</strong>  Friends</li>
                                            <li className="review-count"><span></span><strong>#</strong>  Reviews</li>
                                            <li className="photo-count"><span></span><strong>#</strong>  Photos</li>
                                        </ul>
                                    </div>
                                    {this.showActions()}
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="Profile-show-bot-container">
                            <div className="Profile-show-bot-box-wrapper">
                                <div className="column column-alpha">
                                    <div className="Profile-column-title">
                                        <h3>{this.props.targetUser.firstName} 's Profile</h3>
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
                                        {this.showReviews(this.props.reviews)}
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