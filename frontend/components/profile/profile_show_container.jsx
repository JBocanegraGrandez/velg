import ProfileShow from './profile_show';
import { connect } from 'react-redux';

export const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
});

export default connect(mapStateToProps, null)(ProfileShow);