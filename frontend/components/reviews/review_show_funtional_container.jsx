import BusinessReviewsFunctional from './review_show_form_funtional';
import { connect } from  'react-redux';
import {destroyReview} from '../../actions/review_actions';
import { withRouter } from 'react-router';
// import React from 'react'; //Why this?

const mapStateToProps = (state, ownProps) => {
  return {
  current_biz: state.entities.business[ownProps.match.params.id],
  currentUser: state.entities.users[state.session.id],
  reviews: state.entities.reviews
  }

};
const mapDispatchToProps = dispatch => ({
  deleteReview: (id) => dispatch(destroyReview(id))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BusinessReviewsFunctional));
