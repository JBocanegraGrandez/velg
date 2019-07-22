import ProfileShow from './profile_show';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { fetchReviewsUser } from '../../actions/review_actions';

export const mapStateToProps = (state, ownProps) => {
    console.log(state.reviews)
    return {
        currentUser: state.entities.users[state.session.id],
        targetUser: state.entities.users[ownProps.match.params.id],
        userId: ownProps.match.params.id,
        reviews: state.entities.reviews
    }
};

export const mapDispatchToProps = dispatch => {
    return {
        fetchUser: (id) => dispatch(fetchUser(id)),
        fetchReviewsUser: (id) => dispatch(fetchReviewsUser(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileShow);