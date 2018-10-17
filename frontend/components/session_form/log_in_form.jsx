import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

class LogInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user).then(()=> this.props.history.push('/'));
  }

  renderErrors() {
    if (this.props.errors.length === 0){
      return "";
    }
    return(
      <div className="errors">
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  render() {
    return (

    <div className="auth-holder">
      {this.renderErrors()}
      <div className='auth-main'>
        <div className="main-left">
          <div className="main-left-wrapper">
          <form className="form" onSubmit={this.handleSubmit} className="login-form-box">
            <div className="signup-form-top-container">
              <div className="top-login-div"></div>
              <div className="signup-form-top-text">
              <h2 className="red-title">Log In to Velp </h2>
              <p className="sub-heading">New to Yelp? <Link to="/" className="link-solid">Sign Up</Link> </p>
              <p className="fine-print">By logging in, you agree to Velg's <Link className="link"to="dad">Terms of
                Service</Link> and <Link className="link" to="dad">Privacy Policy.</Link></p>
              </div>
              <div>
                <button className="fb-button"
                  type="submit"><span><i className="fab fa-facebook-f"></i>  </span>  Sign Up with Facebook</button>
                <button className="google-button"
                  type="submit"> <i className="fab fa-google"></i>  Sign Up with Google</button>
              </div>
              <fieldset className="middle-form-login">
                <legend className="or" align="center">OR</legend>
              </fieldset>
            </div>
            <div className="signup-form-bot-container">
            <div className="signup-form-bot">

                <input type="email"
                  value={this.state.email}
                  placeholder="Email"
                  onChange={this.update('email')}
                  className="login-input"
                  required
                />

                <input type="password"
                  placeholder='Password'
                  onChange={this.update('password')}
                  className="login-input"
                  value={this.state.password}
                  required
                />
              <div className="question">
              <p className="fine-print"><Link to="/" className="link">Forgot password?</Link></p>
              </div>
              <button className="red-button"
                type="submit">Log In</button>
              <div className="question2">
                <p className="fine-print2">New to Yelp? <Link to="/signup" className="link"> Sign up</Link></p>
              </div>
            </div>
           </div>
          </form>
         </div>
        </div>
        <div className="main-right">
          <div className="picture-holder">
            <img
              src="https://s3-media4.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png"
              width="382"
              height="342">
            </img>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default withRouter(LogInForm);
