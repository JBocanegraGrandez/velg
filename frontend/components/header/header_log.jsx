import React from 'react';
import { Link } from 'react-router-dom';

const HeaderLog = () => (
  <div className="menu-right">
    <div className="log-in-header-div">
      <Link to="/login" className="link-blank"><button>Log In</button></Link>
    </div>
    <div className="sign-up-header-div">
      <Link to="/signup" className="link-blank"><button>Sign Up</button></Link>
    </div>
  </div>
);

export default HeaderLog;
