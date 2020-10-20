import React from 'react';
import '../App.css';
import styled from 'styled-components'


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
        <a href='/'>WaterMyPlants</a>
      </div>

      <div className='nav-links'>
        <a href='/profile' >My Plants</a>
        <a href='/login' >Login</a>
        <a href='/sign-up' >Sign Up</a>
        <a href='/new-plant' >Create Plant</a>
        <a href='/contact-us'>Contact</a>
      </div>
      
    </div>
    </NavBar>
  );
}

export default Navbar;
