import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
  RECEIVE_BUSINESSES_SEARCH,
} from '../actions/business_actions';

const _nullUser = Object.freeze({
  id: null
});

const searchBusinessesReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BUSINESSES_SEARCH:
      return action.businesses;
    default:
      return state;
  }
};

export default searchBusinessesReducer;
