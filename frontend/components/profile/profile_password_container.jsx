import ProfilePassword from './profile_password';
import { connect } from "react-redux";
import { fetchUser, updateUser } from "../../actions/user_actions";

export const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        targetUser: state.entities.users[ownProps.match.params.id],
        userId: ownProps.match.params.id,
        reviews: state.entities.reviews
    };
};

export const mapDispatchToProps = dispatch => {
    return {
        fetchUser: id => dispatch(fetchUser(id)),
        updateUser: (id, user) => dispatch(updateUser(id, user))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfilePassword);