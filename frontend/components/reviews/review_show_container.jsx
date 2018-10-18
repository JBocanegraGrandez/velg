import { connect } from 'react-redux';
import { fetchReview } from '../../actions/business_actions';
import { withRouter } from 'react-router-dom';

export const mapDispatchToProps = dispatch => ({
  fetchReview: (businessId) => dispatch(fetchReview(businessId))
});
