import React from 'react';
import { Link } from 'react-router-dom';
import HeaderSearch from '../header/header_search';

class ProfilePictureForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
  
  fileupload(){
    e.preventDefault();
    const formData = new FormData();
    formData.append('user[title]', this.state.title);
    if (this.state.photoFile) {

        formData.append('user[photo]', this.state.photoFile);
    }
    $.ajax({
        url: '/api/users',
        method: 'POST',
        data: formData,
        contentType: false,
        processData: false
    });
  }

    handleSubmit(e) {
        e.preventDefault();
        
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
                <h3>
                  {this.props.currentUser.firstName} 's Account Settings
                </h3>
              </div>
              <ul className="Profile-column-items">
                <li className="Profile-column-li">
                  <Link
                    to={`/user/${this.props.currentUser.id}/edit`}
                    className="Profile-link-li"
                  >
                    <div className="Profile-li-inside-wrapper">
                      <div className="Profile-li-inside-holder">
                        <span>Profile</span>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="Profile-column-li">
                  <Link
                    to={`/user/${this.props.currentUser.id}/profilepic`}
                    className="Profile-link-li li-active"
                  >
                    <div className="Profile-li-inside-wrapper">
                      <div className="Profile-li-inside-holder">
                        <span>Change Picture</span>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="Profile-column-li">
                  <Link
                    to={`/user/${this.props.currentUser.id}/password`}
                    className="Profile-link-li"
                  >
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
                  <h2>Change Picture</h2>
                  <p>
                    Your name and primary photo will be used in Velg
                    consumer and business products.
                  </p>
                </div>
                <form
                  className="account-settings-content-form"
                  onSubmit={this.handleSubmit}
                >
                  <div className="account-settings-profile-bio">
                    <label htmlFor="first_name">Your Profile Picture</label>
                   
                    <button
                      type="submit"
                      value="submit"
                      className="profile-red-button"
                    >
                      <span>Save Changes</span>
                    </button>
                    <Link
                      className="link cancel-submit"
                      to={`/user/${this.props.targetUser.id}`}
                    >
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

export default ProfilePictureForm;