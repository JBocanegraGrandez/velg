import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {login, signup, logout} from './util/session_api_util';
import Root from './components/root';
window.login = login;
window.signup = signup;
window.logout = logout;

document.addEventListener('DOMContentLoaded',()=> {
  const store = configureStore();

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
