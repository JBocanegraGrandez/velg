import * as APIUtil from '../util/business_api_util';

export const RECEIVE_BUSINESSES = 'RECEIVE_BUSINESSES';
export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

export const receiveBusinesses = businesses => ({
  type: RECEIVE_BUSINESSES,
  businesses,
});

export const receiveBusiness = ({
  restaurantName, street, neighborhood, city, state, zipcode, id }) => ({
  type: RECEIVE_BUSINESS,
  restaurant_name: restaurantName,
  street,
  neighborhood,
  city,
  state,
  zipcode,
  id
});

export const receiveReview = ({ review, average_rating, author }) => ({
  type: RECEIVE_REVIEW,
  review,
  average_rating,
  author,
});

export const createReview = review => dispatch => (
  APIUtil.createReview(review).then(review => (
    dispatch(receiveReview(review))
  ))
);

export const fetchBusinesses = () => dispatch => (
  APIUtil.getBusinesses().then(businesses => (
    dispatch(receiveBusinesses(businesses))
  ))
);

export const fetchBusiness = id => dispatch => (
  APIUtil.getBusiness(id).then(business => (
    dispatch(receiveBusiness(business))
  ))
);
