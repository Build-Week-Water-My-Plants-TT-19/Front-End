import React from 'react';
import '../App.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className='logo'>
        <img src='https://notion-emojis.s3-us-west-2.amazonaws.com/v0/svg-twitter/1f340.svg' alt='plant logo' />
        <p>WaterMyPlants</p>
      </div>

      <div className='nav-links'>
        <a href='/' >My Plants</a>
        <a href='/login' >Login</a>
        <a href='/sign-up' >Sign Up</a>
        <a href='/new-plant' >Create Plant</a>
      </div>
      
    </div>
  );
}

export default Navbar;
