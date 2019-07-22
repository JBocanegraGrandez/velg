import React from 'react';
import {Link} from 'react-router-dom';
import ReviewCreateHeader from './review_create_header'

class ReviewCreateForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            body: "",
            rating: '0',
            authorId: this.props.currentUser.id,
            businessId: this.props.businessId
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchBusiness(this.props.businessId);
    }

    componentWillReceiveProps(nextprops) {
        if (this.props.businessId !== nextprops.businessId) {
            this.props.fetchBusiness(nextprops.businessId);
        }
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleChange(event) {
        this.setState({ rating: event.target.value });
    }

    handleSubmit(e) {
        e.preventDefault()
        let review = {
            body: this.state.body,
            rating: parseInt(this.state.rating),
            author_id: this.state.authorId,
            business_id: this.state.businessId,
            useful: 0,
            funny: 0,
            cool: 0
        }
        this.props.createReview(this.state.businessId, review)
    }

    showRatingMessage() {
        let message
        switch (this.state.rating) {
            case "1":
                message = "Eek! Methinks not.";
                break;
            case "2":
                message = "Meh. I've experienced better.";
                break;
            case "3":
                message = "A - OK."
                break;
            case "4":
                message = "Yay! I'm a fan.";
                break;
            case "5":
                message = "Woohoo! As good as it gets!";
                break;
            default:
                message = "Select your rating"
                break;
        }
        return message
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
                                <form onSubmit={this.handleSubmit}>
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
                                                            <p>{this.showRatingMessage()}</p>
                                                        </span>
                                                    </fieldset>
                                                </div>
                                            </div>
                                            <select value={this.state.rating} onChange={this.handleChange}>
                                                <option  disabled value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                            <textarea className="review-create-textarea"
                                                value={this.state.body}
                                                onChange={this.update('body')}
                                                placeholder="Your review helps others learn about great local businesses. 
                                                    Please don't review this business if you received a freebie for writing this review, 
                                                    or if you're connected in any way to the owner or employees.">
                                            </textarea>
                                        </div>
                                    </div>
                                    <div className="review-create-submit-wrapper">
                                        <div className="review-create-submit-holder">
                                            <button type="submit" className="review-create-submit-button">Post Review</button>
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