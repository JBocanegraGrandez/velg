import ProfileShow from './profile_show';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';

export const mapStateToProps = (state, ownProps) => {
    console.log(ownProps)
    return {
        currentUser: state.entities.users[state.session.id],
        targetUser: state.entities.users[ownProps.match.params.id],
        userId: ownProps.match.params.id
    }
};

export const mapDispatchToProps = dispatch => {
    return {
        fetchUser: (id) => dispatch(fetchUser(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileShow);