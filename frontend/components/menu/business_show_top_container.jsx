import BusinessShowTopForm from './business_show_top';
import { connect } from 'react-redux';
import { fetchBusiness } from '../../actions/business_actions';
import { withRouter } from 'react-router-dom';

export const mapStateToProps = (state, ownProps)=> ({
  business: state.entities.business[ownProps.match.params.id],
  businessId: ownProps.match.params.id
});

export const mapDispatchToProps = dispatch => ({
  fetchBusiness: (id) => dispatch(fetchBusiness(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BusinessShowTopForm));
