import BusinessReviewsFunctional from './review_show_form_funtional';
import { connect } from  'react-redux';
import {fetchFilteredBusinesses} from '../../actions/business_actions';
import { withRouter } from 'react-router';
// import React from 'react'; //Why this?

const mapStateToProps = (state, ownProps) => {
  return {
  current_biz: state.entities.business[ownProps.match.params.id]};
};
// const mapDispatchToProps = dispatch => ({
//   searchbiz: (arg) => dispatch(fetchFilteredBusinesses(arg))
// });


export default withRouter(connect(mapStateToProps, null)(BusinessReviewsFunctional));
