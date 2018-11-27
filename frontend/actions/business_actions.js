import * as APIUtil from '../util/business_api_util';

export const RECEIVE_BUSINESSES = 'RECEIVE_BUSINESSES';
export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_BUSINESSES_SEARCH = 'RECEIVE_BUSINESS_SEARCH';

export const receiveBusinesses = businesses => ({
  type: RECEIVE_BUSINESSES,
  businesses,
});
export const receiveBusinessesSearch = businesses => ({
  type: RECEIVE_BUSINESSES_SEARCH,
  businesses,
});

export const receiveBusiness = ({
  restaurantName, street, neighborhood, city, state, zipcode,
  id, delivery, takeout, reviews, lat, lng }) => ({

    type: RECEIVE_BUSINESS,
    restaurant_name: restaurantName,
    street,
    neighborhood,
    city,
    state,
    zipcode,
    id,
    delivery,
    takeout,
    reviews,
    lat,
    lng
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

export const fetchBusinesses = () => dispatch => (
  APIUtil.getBusinesses().then(businesses => (
    dispatch(receiveBusinesses(businesses))
  ))
);

export const fetchFilteredBusinesses = (arg) => dispatch => (
  APIUtil.getBusinesses(arg).then(businesses => (
    dispatch(receiveBusinessesSearch(businesses))
  ))
);

export const fetchBusiness = id => dispatch => {
  return APIUtil.getBusiness(id).then(business => {
    return dispatch(receiveBusiness(business));
  });
};
