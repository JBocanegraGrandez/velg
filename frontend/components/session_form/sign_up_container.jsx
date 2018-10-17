import SignUpForm from './sign_up_form';
import { connect } from  'react-redux';
import { signup } from  '../../actions/session_actions.js';

const mapStateToPros = ({errors}) => ({
  errors: errors.errors
});

const mapDispatchToProp = dispatch => ({
  signup: (user) => dispatch(signup(user))
});

export default connect(mapStateToPros, mapDispatchToProp)(SignUpForm);
