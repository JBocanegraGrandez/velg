import merge from 'lodash/merge';

import {
  RECEIVE_REVIEWS_USER,
  DELETE_REVIEW,
  RECEIVE_REVIEWS
} from '../actions/review_actions';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_REVIEWS_USER:
    
      return action.reviews;
      // return merge({}, state, action.reviews)

    // case RECEIVE_BUSINESSES_SEARCH:
    //   return merge({}, state, {[action.businesses.id]: action.businesses});
    // case RECEIVE_BUSINESS:
    //   const newBusiness = { [action.id]: action };
    //   return merge({}, state, newBusiness);
    // case RECEIVE_REVIEW:
      // const { review, average_rating } = action;
      // const newState = merge({}, state);
      // newState[review.business_id].reviewIds.push(review.id);
      // newState[review.business_id].average_rating = average_rating;
      // return newState;
    case RECEIVE_REVIEWS:
      let newState = {}
      action.reviews.forEach(element => {
        newState[element.id] = element
      });
      return newState
    case DELETE_REVIEW:
      // let newState = Object.assign(state)
       newState = {}
      Object.values(state).forEach(element => {
        newState[element.id] = element
      });
      delete newState[action.review.id]
      return newState
    default:
      return state;
  }
};

export default reviewsReducer;
