import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
      <Outlet/>
    </nav>
  );
};

export default Navbar;
