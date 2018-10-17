import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import businessesReducer from './businesses_Reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  business: businessesReducer
});

export default entitiesReducer;
