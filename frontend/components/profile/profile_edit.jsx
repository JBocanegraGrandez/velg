import React from 'react';
import { Link } from 'react-router-dom';
import HeaderSearch from '../header/header_search';

class ProfileEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        firstName: this.props.currentUser.firstName,
        lastName: this.props.currentUser.lastName,
        zipcode: this.props.currentUser.zipcode
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  componentWillReceiveProps(nextprops) {
    if (this.props.userId !== nextprops.userId) {
      this.props.fetchUser(nextprops.userId);
    }
  }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            zipcode: this.state.zipcode,
        }
        this.props.updateUser(this.props.currentUser.id, user)
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

  render() {
      if (this.props.currentUser === undefined || this.props.targetUser === undefined) {
          return null;
      }
    return (
      <div>
        <HeaderSearch />
        <div className="Profile-edit-main-wrapper">
          <div className="Profile-edit-main-holder">
            <div className="column column-alpha">
              <div className="Profile-column-title">
                <h3>{this.props.currentUser.firstName} 's Account Settings</h3>
              </div>
              <ul className="Profile-column-items">
                <li className="Profile-column-li">
                  <Link
                    to={"/profile/edit"}
                    className="Profile-link-li li-active"
                  >
                    <div className="Profile-li-inside-wrapper">
                      <div className="Profile-li-inside-holder">
                        <span>Profile</span>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="Profile-column-li">
                  <Link to={"/profile/password"} className="Profile-link-li">
                    <div className="Profile-li-inside-wrapper">
                      <div className="Profile-li-inside-holder">
                        <span>Password</span>
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="column column-beta">
              <div className="account-settings-content">
                <div className="account-settings-content-title">
                  <h2>Profile</h2>
                  <p>
                    Your name and primary photo will be used in Yelp consumer
                    and business products.
                  </p>
                </div>
                <form className="account-settings-content-form" onSubmit={this.handleSubmit}>
                  <div className="account-settings-profile-bio">
                    <label htmlFor="first_name">First Name</label>
                    <span className="help-block">This field is required.</span>
                    <input
                      id="first_name"
                      type="text"
                      name="first_name"
                      value={this.state.firstName}
                      onChange={this.update('firstName')}
                    />
                    <label htmlFor="last_name">Last Name</label>
                    <span className="help-block">
                      This field is required, Only your last initial will show
                      on your profile.
                    </span>
                    <input
                      id="last_name"
                      type="text"
                      name="last_name"
                      value={this.state.lastName}
                      onChange={this.update('lastName')}
                    />
                    <label htmlFor="zipcode">ZIP Code</label>
                    <span className="help-block">
                      This field is required for location porpuses.
                    </span>
                    <input
                      id="zipcode"
                      type="text"
                      name="zipcode"
                      value={this.state.zipcode}
                      onChange={this.update('zipcode')}
                    />
                    <button
                      type="submit"
                      value="submit"
                      className="profile-red-button"
                    >
                      <span>Save Changes</span>
                    </button>
                    <Link className="link cancel-submit" to={"/profile"}>
                      Cancel
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileEdit;