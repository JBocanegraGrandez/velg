import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';

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
      <div className="img-container">
        <div className="main-holder">
          <div className="logo">
            <div className="logo-background">
            </div>
          </div>
          <div className="search">
            <div className="left-search-container">
              <div className="div-label-find">
                <label for="left-search-input">Find</label>
              </div>
              <div className="div-input">
                <input id="left-search-input"
                placeholder="home cleaners, burgers, spas..."
                type="text"></input>
              </div>
            </div>
            <div className="right-search-container">
              <div className="div-label-near">
                <label for="right-search-input">Near</label>
              </div>
              <div className="div-input">
                <input id="right-search-input"
                placeholder="address, neighborhood, city, state or zip"
                type="text"></input>
              </div>
            </div>
            <div className="right-search-logo">
              <button type="submit" className="logo-glass"></button>
            </div>
          </div>
          <div className="items">
          </div>
        </div>
      </div>


    );
  }
}

export default SearchIndexForm;
