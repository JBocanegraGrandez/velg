import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const usersReducer = (state ={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
    debugger
      return merge({}, state, {[action.currentUser.id]: action.currentUser});
    default:
      return merge({}, state);
  }
};

export default usersReducer;
