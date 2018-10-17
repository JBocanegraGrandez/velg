import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import HeaderMain from '../header/header_main';
import SearchMain from '../menu/search_main';

class SearchIndexForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      location: ''
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
    this.props.login(user);
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
      <div className="master">
        <div className="img-container">
         <HeaderMain />
          <div>
            <div className="main-holder">
              <div className="logo">
                <div className="logo-background">
                </div>
              </div>

                <SearchMain />

              <div className="items">
                <div>
                  Home Cleaners
                </div>
                <div>
                  Restaurants
                </div>
                <div>
                  Home Services
                </div>
                <div>
                  Delivery
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>


    );
  }
}

export default SearchIndexForm;
