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
import LogInFormContainer from './session_form/log_in_container';
import SearchIndexForm from './menu/search_container';
// import SignUpFormContainer from './session_form/signup_form_container';
// import LogInFormContainer from './session_form/login_form_container';
// import SearchContainer from './search/search_container';

const App = () => (
  <div>
    <header>
      <HeaderContainer />
      <Link to="/" className="header-link">
      </Link>
    </header>
    <Switch>
      <Route exact path="/login" component={LogInFormContainer} />
      <Route exact path="/signup" component={SignUpFormContainer} />
      <Route path='/' component={SearchIndexForm} />
    </Switch>
  </div>
);

export default App;
