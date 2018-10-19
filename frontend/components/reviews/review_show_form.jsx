import React from 'react';
const BusinessReviews = () => (
  <div>
    <div className="review-title">
      <h3 className='review-title-container'>Recommended Review</h3>
      <div className="for-this-restaurant">for this restaurant</div>
    </div>
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
            10/9/2018
          </div>
        </div>
        <div className='review-body-container-main'>
          <p>This was probably one of the better bowls of ramen I've had! I literally held my bowl up and drank all of the soup broth! We ordered the Original Ramen ($14), Crispy Mushrooms ($8), and a side of Oxtail ($5). The Crispy Mushrooms were well-battered and flavorful. The shimeji mushroom was nice and smooth. The Original Ramen consists of a beef bone broth and came with incredibly tender beef filets, a delicious black truffle oil, bouncy noodles, slices of king oyster mushroom, an onsen egg, and green onions.</p>
        </div>
      </div>
    </div>
  </div>
);

export default BusinessReviews;
