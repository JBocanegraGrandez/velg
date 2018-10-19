import React from 'react';


class BusinessReviews extends React.Component{
  constructor(props){
    super(props);
  }

  render() {

    if (!this.props.current_biz.reviews) {
      return <div></div>;
    }
    const reviews = this.props.current_biz.reviews;

    const reviewArr = Object.values(reviews);
    return(
      <div>

                <div>
                  <div className="review-title">
                    <h3 className='review-title-container'>Recommended Review</h3>
                    <div className="for-this-restaurant">for {this.props.restaurantName}</div>
                  </div>
                  {reviewArr.map((review) =>{

                    return(


                  <div className="review-business-main">
                    <div className='review-author-container'>
                      <div className='review-author-info'>
                        <div className="business-review-photo">
                        </div>
                        <div className="business-review-details">
                          <div className='business-review-author-name'>
                            Chuck N.
                          </div>
                          <div className='business-review-author-info'>
                            <span className="span-icon">(I)</span><span className="span-number">16</span><span className="span-text">reviews</span>
                          </div>
                          <div className='business-review-author-info'>
                            <span className="span-icon">(P)</span><span className="span-number">8</span><span className="span-text">photos</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='review-body-container'>
                      <div className='raiting-date-container'>
                        <div className='business-review-stars'>
                        </div>
                        <div className='business-review-date'>
                          {reviews.created_at}
                        </div>
                      </div>
                      <div className='review-body-container-main'>
                        <p>{review.body}</p>
                      </div>
                    </div>
                  </div>
              );})
            }
          </div>
        </div>
      );
    }
}

export default BusinessReviews;
