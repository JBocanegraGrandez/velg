import BusinessIndex from './business_index';
import { connect } from 'react-redux';
import { fetchBusiness } from '../../actions/business_actions';
import { withRouter } from 'react-router-dom';

export const mapStateToProps = (state, ownProps)=> ({
  businesses: state.search_businesses,
});

// export const mapDispatchToProps = dispatch => ({
//   fetchBusiness: (id) => dispatch(fetchBusiness(id))
// });

export default withRouter(connect(mapStateToProps, null)(BusinessIndex));
