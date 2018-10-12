import LogInForm from './log_in_form';
import { connect } from  'react-redux';
import { login } from  '../../actions/session_actions.js';
// import React from 'react'; //Why this?

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user))
});

export default connect(null, mapDispatchToProps)(LogInForm);
