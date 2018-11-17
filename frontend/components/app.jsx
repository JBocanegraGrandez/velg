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
import SearchIndexForm from './menu/search_index';
import FooterMain from './menu/footer';
import BusinessShowTop from './menu/business_show_top_container';
import BusinessIndex from './menu/business_index';
import { AuthRoute } from "../util/route_util.jsx";


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
      <Route exact path="/business/:id" component={BusinessShowTop} />
      <Route exact path='/' component={SearchIndexForm} />
      <Route path='/search' component={BusinessIndex} />
    </Switch>
    <footer>
      <FooterMain/>
    </footer>
  </div>
);

export default App;
