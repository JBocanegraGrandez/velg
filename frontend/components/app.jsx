import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import HeaderAuthContainer from './header/header_auth';
import HeaderMainContainer from './header/header_main';
import SignUpFormContainer from './session_form/sign_up_container';
import LogInFormContainer from './session_form/log_in_container';
import SearchIndexForm from './menu/search_container';
import { AuthRoute } from "../util/route_util.jsx";
// import SignUpFormContainer from './session_form/signup_form_container';
// import LogInFormContainer from './session_form/login_form_container';
// import SearchContainer from './search/search_container';

const App = () => (
  <div>
    <header>
      <AuthRoute exact path="/login" component={HeaderAuthContainer} />
      <AuthRoute exact path="/signup" component={HeaderAuthContainer} />
      <Link to="/" className="header-link">
      </Link>
    </header>
    <Switch>
      <Route exact path="/login" component={LogInFormContainer} />
      <Route exact path="/signup" component={SignUpFormContainer} />
      // <Route path='/' component={SearchIndexForm} />
      // <Route path='/' component={HeaderMainContainer} />
    </Switch>
  </div>
);

export default App;
