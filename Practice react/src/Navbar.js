import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h1>React Practice Mini porjects</h1>
      <div className="nav-links">
        <Link to="/menu">Todo list</Link>
        <span className="link-space"></span>
        <Link to="/aboutus">About API</Link>
        <span className="link-space"></span>
        <Link to="/Home">Home</Link>
        <span className="link-space"></span>
        <Link to="/Profile">Profile</Link>
        <span className="link-space"></span>
        <Link to="/Forms">Forms</Link>
      </div>
    </nav>
  );
};

export default Navbar;
