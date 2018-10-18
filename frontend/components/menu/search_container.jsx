import SearchMain from './search_main';
import { connect } from  'react-redux';
import {fetchFilteredBusinesses} from '../../actions/business_actions';
// import React from 'react'; //Why this?

const mapStateToProps = state => {
  return {
  search_results: state.search_businesses.id};
};
const mapDispatchToProps = dispatch => ({
  searchbiz: (arg) => dispatch(fetchFilteredBusinesses(arg))
});


export default connect(mapStateToProps, mapDispatchToProps)(SearchMain);
