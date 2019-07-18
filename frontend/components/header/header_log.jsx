import React from 'react';
import { Link } from 'react-router-dom';

const HeaderLog = ({currentUser, logout}) => {
  const needLog =()=> (
  <div className="menu-right">
    <div className="log-in-header-div">
      <Link to="/login" className="link-blank"><button>Log In</button></Link>
    </div>
    <div className="sign-up-header-div">
      <Link to="/signup" className="link-blank"><button>Sign Up</button></Link>
    </div>
  </div>
  );
  const logged = () => (
  <div className="menu-right">
    <div className="comment-header-div">
      <Link to={'/profile'}><span className="nav-profile-pic-holder"></span></Link>
    </div>
    <div className="sign-up-header-div">
      <Link to="/signup" className="link-blank"><button onClick={logout} >Log out</button></Link>
    </div>
  </div>
  );

  return currentUser ? logged() : needLog();
};

export default HeaderLog;
