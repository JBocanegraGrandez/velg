import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {login, signup, logout} from './util/session_api_util';
import {getBusinesses, getBusiness, createReview} from './util/business_api_util';
import { fetchBusiness } from './actions/business_actions';
import Root from './components/root';
window.login = login;
window.signup = signup;
window.logout = logout;
window.getBusinesses = getBusinesses;
window.getBusiness = getBusiness;
window.createReview = createReview;
window.fetchBusiness = fetchBusiness;


document.addEventListener('DOMContentLoaded',()=> {
  let store;
 if (window.currentUser) {
   const preloadedState = {
     session: { id: window.currentUser.id },
     entities: {
       users: { [window.currentUser.id]: window.currentUser }
     }
   };
   store = configureStore(preloadedState);
   delete window.currentUser;
 } else {
   store = configureStore();
 }

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
