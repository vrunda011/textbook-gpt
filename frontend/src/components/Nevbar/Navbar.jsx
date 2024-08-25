// src/components/Navbar/Navbar.js
import React from 'react';
import './Navbar.css';
import nav_logo from '../../assets/Images/Textbook.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={nav_logo} alt="Logo" className='nav-logo-img' />
        <Link to='/'>TextBook GPT</Link>
      </div>
      <div className='nav-links'>
        <Link to='/'>Home</Link>
        <Link to='/'>About Us</Link>
        <Link to='/'>Contact Us</Link>
        <Link to='/login'>Login/Signup</Link>
      </div>
    </div>
  );
};

export default Navbar;
