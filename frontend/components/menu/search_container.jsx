import SearchMain from './search_main';
import { connect } from  'react-redux';
import { login } from  '../../actions/session_actions.js';
// import React from 'react'; //Why this?

const mapDispatchToProps = dispatch => ({
  searchbiz: (arg) => dispatch()
});

export default connect(null, mapDispatchToProps)(SearchMain);
