import LogInForm from './log_in_form';
import { connect } from  'react-redux';
import { login } from  '../../actions/session_actions.js';
// import React from 'react'; //Why this?

const mapStateToPros = ({errors}) => ({
  errors: errors.session
});

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user))
});

export default connect(mapStateToPros, mapDispatchToProps)(LogInForm);
