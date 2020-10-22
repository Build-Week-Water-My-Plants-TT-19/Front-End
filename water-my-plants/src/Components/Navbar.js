import React from 'react';
import '../App.css';
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'


//NavBar Styles
const NavBar = styled.div`
  display:flex;
  justify-content:space-between;
  align-items: center;
  background-color: mistyrose;
  height: 6vh;
  border-bottom: 1px solid coral;
  position: fixed;
  width: 100%;

  
  a{
    text-decoration:none;
    font-weight:bold;
    transition: all 1s ease-out;
    

    &:hover{
    color:orange;
    transform:scale(1.3);
    transition: all 1s ease-in-out;
    
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
  const history = useHistory()

  const logout = () => {
    window.localStorage.clear();
    history.push('/login');
  }

  return (
    <NavBar>
      
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
        <Link to='/login'><p onClick={logout}>Logout</p></Link>
      </div>
      
    </NavBar>
  );
}

export default Navbar;
