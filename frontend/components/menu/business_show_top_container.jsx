import BusinessShowTopForm from './business_show_top';
import { connect } from 'react-redux';
import { fetchBusiness } from '../../actions/business_actions';
import { withRouter } from 'react-router-dom';
import {fetchFilteredBusinesses} from '../../actions/business_actions';


export const mapStateToProps = (state, ownProps)=> ({
  business: state.entities.business[ownProps.match.params.id],
  businessId: ownProps.match.params.id
});

export const mapDispatchToProps = dispatch => ({
  fetchBusiness: (id) => dispatch(fetchBusiness(id)),
  searchbiz: (arg) => dispatch(fetchFilteredBusinesses(arg))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BusinessShowTopForm));
