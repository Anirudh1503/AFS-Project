import React from 'react';
import { Link } from 'react-router-dom'; 
import Logout from './Logout';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left-side">
        <div className="name">Spiritus</div>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/posts">View Posts</Link></li>
        </ul>
      </div>
      <div className="right-side">
        <ul>
          <li><Link to="/post">Create Post</Link></li>
          <li><Link to="/register">Sign Up</Link></li>
          <li><Logout /></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
