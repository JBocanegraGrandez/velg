import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import businessesReducer from './businesses_reducer';
import reviewReducer from './reviews_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  business: businessesReducer,
  reviews: reviewReducer
});

export default entitiesReducer;
