import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/lan.png';
import comp from '../../images/logo.png';

import './styles.css';

function Landing() {
  return (
    <div className="lan-body">
      <div className="lan-navbar">
        <ul>
          <div>
            <li className="lan-title">klez.sap<img src={comp} alt="icon" height="55" /></li>
          </div>
          <div className="lan-contents">
            <li>Home</li>
            <a href="https://www.linkedin.com/pulse/service-management-system-prasanth-gunnam/?trackingId=dAwShkEtQo%2Bz%2BIL0lN4e%2BA%3D%3D" target="_blank"><li>About</li></a>
            <a href="https://github.com/Audacity21/SDP-1-Project" target="_blank"><li>Github</li></a>
            <li>Contact</li>
          </div>
        </ul>
      </div>

      <div className="lan-desc">
        <div className="lan-info">
          <h1>Matching security specialists<br/>with great companies.</h1>
          <div className="lan-login">
            <div className="lan-security">
              <h3>For Security</h3>
              <p>Sign Up as a cyber security expert to find services that are posted by people and contact them using our interface and offer your service</p>
              <Link to="/auth" className="lan-btn1">Start services</Link>
          </div>
          <div className="lan-customer">
            <h3>For Customers</h3>
            <p>Sign Up as a customer to post your problems into our app so that professionals can find out your posts and come forward to offer their services</p>
            <Link to="/auth" className="lan-btn2">Sign up & search</Link>
          </div>
          </div>
        </div>

        <div className="lan-img">
          <img src={logo} alt="no image" />
        </div>
      </div>

      <div className="lan-footer">
        <p>Copyright © 2021 Audacity21<br />Privacy Policy</p>
      </div>
    </div>
  );
}

export default Landing;