import React from 'react';
import '../App.css';
import styled from 'styled-components'

// ------------------------- Basic Styles ------------------------------
const FooterBar = styled.div`
    display: flex;
    justify-content:space-between;
    align-items: center;
    background-color: mistyrose;
    height: 6vh;
    padding-left: 2%;
    width:100%;
    overflow-x:hidden;
    border-top: 1px solid black;

    a{
        text-decoration: none;
        padding-right:5%;
    }
`

const Footer = () => {
    return (
        <div>
            <FooterBar>
                <p>Copyright &copy; Water my plants 2019</p>
                <a href='/contact-us'>Contact</a>
            </FooterBar>
        </div>
    )
}

export default Footer
