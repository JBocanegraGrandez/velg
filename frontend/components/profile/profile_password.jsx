import React from 'react';
import { Link } from 'react-router-dom';
import HeaderSearch from '../header/header_search';

class ProfilePassword extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            oldPassword: "",
            newPassword: "",
            newPassword2: "",
            demoUser: false
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

    passwordIsMatch() {
        return (
            this.state.oldPassword.length > 0 &&
            this.state.newPassword.length > 0 &&
            this.state.newPassword === this.state.newPassword2
        );
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            password: this.state.newPassword,
        }
        if (this.props.currentUser.id !== 1 ) {
            this.props.updateUser(this.props.currentUser.id, user)
        }
        else {
            this.setState({demoUser: true})
        }
    }

    showDemoRestriction () {
        if (this.state.demoUser) {
            return (
               <div className="alert-error">
                <p className="alert-message">Changing Password of the Demo User is Disabled</p>
               </div>
            )
        }
        
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
                                        className="Profile-link-li"
                                    >
                                        <div className="Profile-li-inside-wrapper">
                                            <div className="Profile-li-inside-holder">
                                                <span>Change Picture</span>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                                <li className="Profile-column-li">
                                    <Link to={`/user/${this.props.currentUser.id}/password`} className="Profile-link-li li-active">
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
                                    <h2>Password Change</h2>
                                </div>
                                {this.showDemoRestriction()}
                                <form className="account-settings-content-form" onSubmit={this.handleSubmit}>
                                    <div className="account-settings-profile-bio">
                                        <label htmlFor="oldPassword">Old Password</label>
                                        <span className="help-block">This field is required.</span>
                                        <input
                                            id="oldPassword"
                                            type="password"
                                            name="oldPassword"
                                            value={this.state.oldPassword}
                                            onChange={this.update('oldPassword')}
                                            required
                                        />
                                        <label htmlFor="newPassword">Password</label>
                                        <span className="help-block">
                                            This field is required, 6 characters minimun.
                    </span>
                                        <input
                                            id="newPassword"
                                            type="password"
                                            name="last_name"
                                            value={this.state.newPassword}
                                            onChange={this.update('newPassword')}
                                            required
                                        />
                                        <label htmlFor="newPassword2">Confirm Password</label>
                                        <span className="help-block">
                                        Please confirm your password
                    </span>
                                        <input
                                            id="newPassword2"
                                            type="password"
                                            name="zipcode"
                                            value={this.state.newPassword2}
                                            onChange={this.update('newPassword2')}
                                            required
                                        />
                                        <button
                                            type="submit"
                                            value="submit"
                                            className="profile-red-button"
                                            disabled={!this.passwordIsMatch()}
                                        >
                                            <span>Change Password</span>
                                        </button>
                                        <Link className="link cancel-submit" to={`/user/${this.props.targetUser.id}`}>
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

export default ProfilePassword;