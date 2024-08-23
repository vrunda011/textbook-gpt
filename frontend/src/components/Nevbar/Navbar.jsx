import React from 'react'
import "./Navbar.css"
import nav_logo from "../../assets/Images/Textbook.png"

const Navbar = () => {
  return (
    <>
      <div className='navbar'>
        <div className='nav-logo'>
            <img src={nav_logo} alt="" className='nav-logo-img' />
            <a href='/'>TextBook GPT</a>
        </div>
        <div className='nav-links'>
            <a href='/'>Home</a>
            <a href='/'>About Us</a>
            <a href='/'>Contact Us</a>
        </div>
        {/* <div className='nav-login-signup'>
            <div className='login-btn'>Sign in</div>
        </div> */}
      </div>
      {/* <div className='navbar-bottem'>
        <p>Are your school student for an online learning?</p>
        <p className='navbar-bottem-blue'>Talk to us</p>
      </div> */}
    </>
  )
}

export default Navbar