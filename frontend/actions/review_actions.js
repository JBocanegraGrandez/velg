import * as APIUtil from '../util/review_api_util';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
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

export const createReview = review => dispatch => (
  APIUtil.createReview(review).then(review => (
    dispatch(receiveReview(review))
  ))
);

export const fetchReviews = () => dispatch => (
  APIUtil.getBusinesses().then(reviews => (
    dispatch(receiveReviews(reviews))
  ))
);

export const fetchTheMatchesBusinesses = (arg) => dispatch => (
  APIUtil.getBusinesses().then(businesses => (
    dispatch(receiveBusinesses(businesses))
  ))
);

export const fetchBusiness = id => dispatch => {
  return APIUtil.getBusiness(id).then(business => {
    return dispatch(receiveBusiness(business));
  });
};
