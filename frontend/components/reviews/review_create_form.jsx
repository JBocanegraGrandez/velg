import React from 'react';
import {Link} from 'react-router-dom';
import ReviewCreateHeader from './review_create_header'

class ReviewCreateForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            body: "",
            rating: '0',
            ratingSubmit: "0",
            authorId: this.props.currentUser.id,
            businessId: this.props.businessId
        }
        this.handleChange = this.handleChange.bind(this);
        this.resetChange = this.resetChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCLick = this.handleCLick.bind(this)
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
    resetChange(event) {
        let rating = this.state.ratingSubmit
        this.setState({ rating: rating  });
    }

    handleCLick(event) {
        this.setState({ ratingSubmit: event.target.value})
        console.log(this.state)
    }

    handleSubmit(e) {
        e.preventDefault()
        let review = {
            body: this.state.body,
            rating: parseInt(this.state.ratingSubmit),
            author_id: this.state.authorId,
            business_id: this.state.businessId,
            useful: 0,
            funny: 0,
            cool: 0
        }
        this.props.createReview(review).then((res) => this.props.history.push(`/business/${this.state.businessId}`))
    }

    showStars() {
        let stars
        switch (this.state.rating) {
            case "1":
                stars = "one-star";
                break;
            case "2":
                stars = "two-star";
                break;
            case "3":
                stars = "three-star";
                break;
            case "4":
                stars = "four-star";
                break;
            case "5":
                stars = "five-star";
                break;
            default:
                stars = "no-star"
                break;
        }
        return stars
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
            <ReviewCreateHeader />
            <div>
              <div className="review-create-body-wrapper">
                <div className="review-content-inner-left">
                  <div className="review-content-title">
                    <div className="review-content-title-left">
                      <h2 className="review-content-title-left-h2">
                        <Link
                          className="review-title-link"
                          to={`/business/${business.id}`}
                        >
                          {business.restaurant_name}
                        </Link>
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
                                <ul className={`review-create-stars-ul ${this.showStars()}`} onMouseLeave={this.resetChange}>
                                  <li className="review-create-stars-li">
                                    <input
                                      type="radio"
                                      className="review-create-stars-li-input"
                                      value="1"
                                      onMouseEnter={this.handleChange}
                                      onClick={this.handleCLick}
                                    />
                                  </li>
                                  <li className="review-create-stars-li">
                                    <input
                                      type="radio"
                                      className="review-create-stars-li-input"
                                      value="2"
                                      onMouseEnter={this.handleChange}
                                      onClick={this.handleCLick}
                                    />
                                  </li>
                                  <li className="review-create-stars-li">
                                    <input
                                      type="radio"
                                      className="review-create-stars-li-input"
                                      value="3"
                                      onMouseEnter={this.handleChange}
                                      onClick={this.handleCLick}
                                    />
                                  </li>
                                  <li className="review-create-stars-li">
                                    <input
                                      type="radio"
                                      className="review-create-stars-li-input"
                                      value="4"
                                      onMouseEnter={this.handleChange}
                                      onClick={this.handleCLick}
                                    />
                                  </li>
                                  <li className="review-create-stars-li">
                                    <input
                                      type="radio"
                                      className="review-create-stars-li-input"
                                      value="5"
                                      onMouseEnter={this.handleChange}
                                      onClick={this.handleCLick}
                                    />
                                  </li>
                                </ul>
                                <span className="review-create-stars-message">
                                  <p>{this.showRatingMessage()}</p>
                                </span>
                              </fieldset>
                            </div>
                          </div>
                          
                          <textarea
                            className="review-create-textarea"
                            value={this.state.body}
                            onChange={this.update("body")}
                            placeholder="Your review helps others learn about great local businesses. 
                                                    Please don't review this business if you received a freebie for writing this review, 
                                                    or if you're connected in any way to the owner or employees."
                          />
                        </div>
                      </div>
                      <div className="review-create-submit-wrapper">
                        <div className="review-create-submit-holder">
                          <button
                            type="submit"
                            className="review-create-submit-button"
                          >
                            Post Review
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
export default ReviewCreateForm