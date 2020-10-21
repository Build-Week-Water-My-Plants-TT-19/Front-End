import React, { useEffect } from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import PlantPic from '../PictureFolder/plantpic4.png'
 
//Styling for Home Page

document.body.style.backgroundImage = `url(${PlantPic})`
document.body.style.backgroundRepeat= 'no-repeat'
document.body.style.backgroundSize = 'cover'
document.body.style.backgroundAttachment = 'fixed'

const StyledHome = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    min-height: 100%;

    p{
    font-size:1.5rem;
    width:25%;
    border:solid black;
    background-color:slateblue;
    padding:1%;
    border: solid 3px orange;
    text-align:center;
    }

    img{
    margin-bottom:1%;
    width:500px;
    height:300px;
    border: solid 3px orange;
    border-radius:50px;
    }

    h1{
    font-size:3rem;
    color:Orange;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    }

    h4{
    font-size:2rem;
    color:Orange;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    }



    button{
    margin-left:15%;
    font-weight:bold;
    border-radius:10px;
    transition: all 1.1s ease-in-out;
    font-size:1.2rem;

        &:hover{
        cursor:pointer;
        background-color:slateblue;
        border:black;
        transform:scale(1.3);
        transition: all 1.1s ease-in-out;
        color:magenta;
        text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
     }
    }

`

const Home = () => {

    return (
        <StyledHome>
        
            
            <h1>Water My Plants</h1>
            <img src='https://images.unsplash.com/photo-1536069221282-d877868cad6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'/>
            <p>Create a plant and it will remind you when it's time to feed that foliage and quench your plants' thirst!</p>
                <h4>Organize</h4>
                <p>Keep track of all your plants in one place, access them right from the dashboard.</p>
                <h4>Forget</h4>
                <p>We keep track of your watering histroy and remind you when to water so you don't have to remember when you last watered or when to water next</p>
                <h4>Record</h4>
                <p>Quickly record watering so you can get back to your other tasks.</p>        

            <Link to='/new-plant'>
                <button>Create a new Plant!</button>
            </Link>
            
        
        </StyledHome>
    )
};

export default Home
