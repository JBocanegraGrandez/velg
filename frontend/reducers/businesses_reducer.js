import merge from 'lodash/merge';

import {
  RECEIVE_REVIEW,
  RECEIVE_BUSINESS,
  RECEIVE_BUSINESSES
} from '../actions/business_actions';

const businessesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BUSINESSES:
      return action.businesses;
    case RECEIVE_BUSINESS:
      const newBusiness = { [action.id]: action };
      return merge({}, state, newBusiness);
    case RECEIVE_REVIEW:
      // const { review, average_rating } = action;
      const newState = merge({}, state);
      // newState[review.business_id].reviewIds.push(review.id);
      // newState[review.business_id].average_rating = average_rating;
      return newState;
    default:
      return merge({}, state);
  }
};

export default businessesReducer;
