import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';



  const Footer = () => (
    <div className="footer-master">
      <div className="footer-container">
        <div className="footer-container-section">
          <div className="footer-title">
            <h3>About</h3>
            <ul>
              <li><a className="link" href="https://github.com/JBocanegraGrandez/velg">About Velg</a></li>
              <li><a className="link" href="https://www.linkedin.com/in/j-bocanegra">About Developer</a></li>
            </ul>
          </div>
          <div className="footer-title">
            <h3>Discover More Projects</h3>
            <ul>
              <li><a className="link" href="https://github.com/JBocanegraGrandez/DDrad">DDrad</a></li>
              <li><a className="link" href="https://simply-travel.herokuapp.com/">SimpleTravel</a></li>
            </ul>
          </div>
          <div className="footer-title">
            <h3>Contact</h3>
            <ul>
              <li>Phone: (925) 395-6944</li>
              <li>Email: jbocanegragrandez@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

export default Footer;
