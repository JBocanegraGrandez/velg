import { combineReducers } from 'redux';

import entitiesReducer from './entities_reducer';
import sessionReducer from './session_reducer';
import searchBusinessesReducer from './search_business_reducer';
import errorsReducer from './errors_reducer';

export default combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  search_businesses: searchBusinessesReducer
});
