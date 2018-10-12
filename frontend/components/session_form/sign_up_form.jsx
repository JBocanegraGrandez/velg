import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name:'',
      last_name: '',
      zipcode: '',
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
    this.props.signup(user);
  }

  renderErrors() {
    // return(
    //   <ul>
    //     {this.props.errors.map((error, i) => (
    //       <li key={`error-${i}`}>
    //         {error}
    //       </li>
    //     ))}
    //   </ul>
    // );
  }

  render() {
    return (

    <div className='auth-main'>
        <div className="main-left">
          <div className="main-left-wrapper">
          <form className="form" onSubmit={this.handleSubmit} className="login-form-box">
            <div className="signup-form-top-container">
              <div className="top-signup-div"></div>
              <div className="signup-form-top-text">
              <h2 className="red-title">Sign Up for Velp </h2>
              <p className="sub-heading">Connect with great vegan businesses</p>
              <p className="fine-print">By signing up, you agree to Velg's <Link className="link"to="dad">Terms of
                Service</Link> and <Link className="link" to="dad">Privacy Policy.</Link></p>
              </div>
              <div>
                <button className="fb-button"
                  type="submit"><span><i className="fab fa-facebook-f"></i>  </span>  Sign Up with Facebook</button>
                <button className="google-button"
                  type="submit"> <i className="fab fa-google"></i>  Sign Up with Google</button>
              </div>
              <p className="fine-print">Don't worry, we never post without your permission</p>
            </div>
            <fieldset className="middle-form">
              <legend className="or" align="center">OR</legend>
            </fieldset>
            <div className="signup-form-bot-container">
            <div className="signup-form-bot">

              <div className='name'>
                <input type="text"
                  placeholder="First Name"
                  onChange={this.update('first_name')}
                  className="first-name"
                  value={this.state.first_name}
                  required
                />

                <input type="text"
                  placeholder="Last Name"
                  onChange={this.update('last_name')}
                  className="last-name"
                  value={this.state.last_name}
                  required
                />
             </div>

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

                <input type="text"
                  placeholder='ZIP Code'
                  onChange={this.update('zipcode')}
                  className="login-input"
                  value={this.state.zipcode}
                  required
                />
              <br/>
              <button className="red-button"
                type="submit">Sign Up</button>
                <div className="question2">
                  <p className="fine-print2">Already on Yelp?<Link to="/login" className="link"> Log in</Link></p>
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

    );
  }
}

export default SignUpForm;
