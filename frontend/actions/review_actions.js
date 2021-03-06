import * as APIUtil from '../util/review_api_util';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_REVIEWS_USER = 'RECEIVE_REVIEW_USER';
export const DELETE_REVIEW = 'DELETE_REVIEW';

export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews,
});
export const deleteReview = review => ({
  type: DELETE_REVIEW,
  review,
});

export const receiveReviewsUser = reviews => ({
  type: RECEIVE_REVIEWS_USER,
  reviews,
});


export const receiveReview = ({ body, businessId, authorId,
  useful, cool, funny }) => ({

    type: RECEIVE_REVIEW,
    body,
    business_id: businessId,
    author_id: authorId,
    cool,
    useful,
    funny
});

export const createReview = (review) => dispatch => (
  APIUtil.postReview(review).then(review => (
    dispatch(receiveReview(review))
  ))
);

export const fetchReviewsUser = (userId) => dispatch => {
  // debugger
  return (
    APIUtil.getReviewsUser(userId).then(reviews => {
      // debugger
      dispatch(receiveReviewsUser(reviews))
    })
  )
};

export const fetchReviewsBusiness = (businessId) => dispatch => {
  return (
    APIUtil.getReviewsBusiness(businessId).then(reviews => {
      dispatch(receiveReviews(reviews))
    })
  )
}

export const destroyReview = (id) => dispatch => {
  return (
  APIUtil.deleteReview(id).then(review => (
    dispatch(deleteReview(review))
  )))
  }

