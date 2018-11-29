import BusinessIndex from './business_index';
import { connect } from 'react-redux';
import { fetchBusiness } from '../../actions/business_actions';
import { withRouter } from 'react-router-dom';
import {fetchFilteredBusinesses} from '../../actions/business_actions';

export const mapStateToProps = (state, ownProps)=> ({
  businesses: state.search_businesses,
});

const mapDispatchToProps = dispatch => ({
  searchbiz: (arg) => dispatch(fetchFilteredBusinesses(arg))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BusinessIndex));
