import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import HeaderContainer from './header/header';
import SignUpFormContainer from './session_form/sign_up_container';
// import SignUpFormContainer from './session_form/signup_form_container';
// import LogInFormContainer from './session_form/login_form_container';
// import SearchContainer from './search/search_container';

const App = () => (
  <div>
    <header>
      <HeaderContainer />
      <SignUpFormContainer />
      <Link to="/" className="header-link">
        <h1>Bench BnB, i mean yelp!</h1>
      </Link>
    </header>
    <Switch>
    </Switch>
  </div>
);

export default App;
