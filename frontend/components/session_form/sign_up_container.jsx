import SignUpForm from './sign_up_form';
import { connect } from  'react-redux';
import { signup, login } from  '../../actions/session_actions.js';

const mapStateToPros = ({errors}) => ({
  errors: errors.session
});

const mapDispatchToProp = dispatch => ({
  signup: (user) => dispatch(signup(user)),
  login: (user) => dispatch(login(user))
});

export default connect(mapStateToPros, mapDispatchToProp)(SignUpForm);
