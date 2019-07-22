import ReviewCreateForm from './review_create_form';
import { connect } from 'react-redux';
import { fetchBusiness } from '../../actions/business_actions';
import { createReview } from '../../actions/review_actions';
import { withRouter } from 'react-router-dom';
import { fetchFilteredBusinesses } from '../../actions/business_actions';


export const mapStateToProps = (state, ownProps) => ({
    business: state.entities.business[ownProps.match.params.id],
    businessId: ownProps.match.params.id,
    currentUser: state.entities.users[state.session.id]
});

export const mapDispatchToProps = dispatch => ({
    fetchBusiness: (id) => dispatch(fetchBusiness(id)),
    createReview: (businessId, review) => dispatch(createReview(businessId, review))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewCreateForm));