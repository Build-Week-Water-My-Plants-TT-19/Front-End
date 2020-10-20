import React from 'react';
import '../App.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className='logo-title'>
        <img src='https://notion-emojis.s3-us-west-2.amazonaws.com/v0/svg-twitter/1f340.svg' alt='plant logo' />
        <p><a href='/'>WaterMyPlants</a></p>
      </div>

      <div className='nav-links'>
        <a href='/profile' >My Plants</a>
        <a href='/login' >Login</a>
        <a href='/sign-up' >Sign Up</a>
        <a href='/new-plant' >Create Plant</a>
        <a href='/contact-us'>Contact</a>
      </div>
      
    </div>
  );
}

export default Navbar;
