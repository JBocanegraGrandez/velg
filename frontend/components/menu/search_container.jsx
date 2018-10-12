import SearchIndexForm from './search_index';
import { connect } from  'react-redux';
import { login } from  '../../actions/session_actions.js';
// import React from 'react'; //Why this?

const mapDispatchToProps = dispatch => ({
  // login: (user) => dispatch(login(user))
});

export default connect(null, mapDispatchToProps)(SearchIndexForm);
