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
import BusinessIndexContainer from './menu/business_index_container';
import ReviewCreateForm from './reviews/review_create_form_container'
import ProfileShow from './profile/profile_show_container';
import { AuthRoute, ProtectedRoute } from "../util/route_util.jsx";
import ProfileEdit from './profile/profile_edit_container';
import ProfilePassword from './profile/profile_password_container';



const App = () => (
  <div>
    <header>
      <AuthRoute exact path="/login" component={HeaderAuthContainer} />
      <AuthRoute exact path="/signup" component={HeaderAuthContainer} />
    </header>
    <Switch>
      <Route exact path="/login" component={LogInFormContainer} />
      <Route exact path="/signup" component={SignUpFormContainer} />
      <Route exact path="/business/:id" component={BusinessShowTop} />
      <Route exact path='/' component={SearchIndexForm} />
      <ProtectedRoute exact path='/business/:id/create' component={ReviewCreateForm} />
      <Route exact path='/user/:id' component={ProfileShow} />
      <Route exact path='/user/:id/edit' component={ProfileEdit} />
      <Route exact path='/user/:id/password' component={ProfilePassword} />
      <Route path='/search' component={BusinessIndexContainer} />
    </Switch>
    <footer>
      <FooterMain/>
    </footer>
  </div>
);

export default App;
