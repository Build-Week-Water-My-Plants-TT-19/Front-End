import React from 'react';
import '../App.css';
import styled from 'styled-components'
import { Link } from 'react-router-dom'


//NavBar Styles
const NavBar = styled.div`
.navbar{
  display:flex;
  justify-content:space-between;
  a{
  }
}
a{
  font-weight:bold;
  font-size:1.2rem;
  color:skyblue;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  transition: all 1.5s ease-in-out;

  &:hover{
    color:orange;
    transform:scale(1.3);
    transition: all 1.5s ease-in-out;
  }
}


`


function Navbar() {
  return (
    <NavBar>
    <div className="navbar">
      <div className='logo-title'>
        <img src='https://notion-emojis.s3-us-west-2.amazonaws.com/v0/svg-twitter/1f340.svg' alt='plant logo' />
        <Link to='/'>WaterMyPlants</Link>
      </div>

      <div className='nav-links'>
        <Link to='/profile' >My Plants</Link>
        <Link to='/login' >Login</Link>
        <Link to='/sign-up' >Sign Up</Link>
        <Link to='/new-plant' >Create Plant</Link>
        <Link to='/contact-us'>Contact</Link>
      </div>
      
    </div>
    </NavBar>
  );
}

export default Navbar;
