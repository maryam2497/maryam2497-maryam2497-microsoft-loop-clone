import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbarr container-fluid">
      <h3>Loop</h3>
      <div>

      <a className="navbar-signin-button" href="">
        Sign In
      </a>
      <a className="navbar-getstarted-button" href="">
        Get Started
      </a>
      </div>
    </nav>
  );
};

export default Navbar;
