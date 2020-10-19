import React from 'react';
import '../App.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className='logo'>
        <img src='https://i1.wp.com/freepngimages.com/wp-content/uploads/2015/12/maple-tree-transparent-background.png?fit=758%2C769' alt='plant logo' />
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
