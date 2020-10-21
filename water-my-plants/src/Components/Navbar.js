import React from 'react';
import '../App.css';
import styled from 'styled-components'


//NavBar Styles
const NavBar = styled.div`
  display:flex;
  justify-content:space-between;
  align-items: center;
  background-color: mistyrose;
  height: 6vh;
  border-bottom: 1px solid coral;

  
  a{
    text-decoration:none;
    font-weight:bold;

    &:hover{
    color:orange;
    transform:scale(1.3);
    transition: all 1.5s ease-in-out;
    }

  }

  .logo-title{
    display: flex;
    align-items:center;
    margin-left: 2%;
  }

  .logo-title a{
    margin-left: 2%;
  }

  .logo-title img{
    margin-top: 2%;
  }

  .nav-links{
    margin-right: 2%;
  }

`

function Navbar() {
  return (
    <NavBar>
      
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
      
    </NavBar>
  );
}

export default Navbar;
