import React from 'react';
import {Link} from 'react-router-dom';
import ReviewCreateHeader from './review_create_header'

class ReviewCreateForm extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.fetchBusiness(this.props.businessId);
    }

    componentWillReceiveProps(nextprops) {
        if (this.props.businessId !== nextprops.businessId) {
            this.props.fetchBusiness(nextprops.businessId);
        }
    }


    render () {
        let business
        if (!this.props.business) {
            return ""
        } else {
            business = this.props.business
        }
        return (
            <div>
                <ReviewCreateHeader/>
                <div>
                    <div className="review-create-body-wrapper">
                        <div className="review-content-inner-left">
                            <div className="review-content-title">
                                <div className="review-content-title-left">
                                    <h2 className="review-content-title-left-h2">
                                        <Link className="review-title-link" to={'/business/1'}>{business.restaurant_name}</Link>
                                    </h2>
                                </div>
                            </div>
                            <div>
                                <form>
                                    <div>
                                        <div className="review-create-box">
                                            <div className="review-create-rate-wrapper">
                                                <div className="review-create-rate-holder">
                                                    <fieldset className="review-create-rate-fieldset">
                                                        <ul className="review-create-stars-ul">
                                                            <li className="review-create-stars-li">
                                                                <input className="review-create-stars-li-input"></input>
                                                            </li>
                                                        </ul>
                                                        <span className='review-create-stars-message'>
                                                            <p>Rate message</p>
                                                        </span>
                                                    </fieldset>
                                                </div>
                                            </div>
                                            <textarea className="review-create-textarea"
                                                placeholder="Your review helps others learn about great local businesses. 
                                                    Please don't review this business if you received a freebie for writing this review, 
                                                    or if you're connected in any way to the owner or employees.">
                                            </textarea>
                                        </div>
                                    </div>
                                    <div className="review-create-submit-wrapper">
                                        <div className="review-create-submit-holder">
                                            <button className="review-create-submit-button">Post Review</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
    }
}
export default ReviewCreateForm