import React from 'react';
import { Link } from 'react-router-dom';
import HeaderSearch from '../header/header_search'

class ProfileShow extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                <HeaderSearch/>
                <div className="Profile-show-main-wrapper">
                    <div className="Profile-show-top">
                        <div className="Profile-show-top-container">
                            <div className="Profile-show-user-container">
                                <div className="user-avatar">
                                    <div className="user-avatar-wrapper">
                                    </div>
                                </div>
                                <div className="user-details-wrapper">
                                    <div className="user-profile-avatar-dummy"></div>
                                    <div className="user-profile-info">
                                        <h1>FirstName L.</h1>
                                        <h3 className="user-location-zipcity">ZipcodeCity</h3>
                                        <ul className="user-profile-stats">
                                            <li className="friend-count"><span></span><strong>#</strong>  Friends</li>
                                            <li className="review-count"><span></span><strong>#</strong>  Reviews</li>
                                            <li className="photo-count"><span></span><strong>#</strong>  Photos</li>
                                        </ul>
                                    </div>
                                    <div className="user-profile-actions">
                                        <ul className="user-profile-action-link-list">
                                            <li>Change Profile Picture</li>
                                            <li>Update Your Profile</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        )
    }
}

export default ProfileShow