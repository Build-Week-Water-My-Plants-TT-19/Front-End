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
    min-height: 100vh;

    .innerContainer{
        display: flex;
        flex-direction: column;
        align-self: center;
        background-color: coral;
        width: 50%;
        margin-top: 12%;
        margin-bottom: 7%;
        border-radius: 20px;
        
    }

    .newPlant-button{
        align-self: center;
        margin-top: 5%;
        margin-bottom: 5%;
    }

    .newPlant-button button{
        border-radius: 20px;
        padding: 5%;
    }

    .top-section{
        background-color: mistyrose;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
    }

    .innerContainer img{
    
        width:100%;
    }

    .innerContainer h1{
        text-align: center;
    }

    .info-section{
        display: flex;
        flex-direction: column;
        align-items: center;
        background: coral;
        
    }

    .info-card{
        background-color: lightblue;
        border-radius: 50px;
        width: 25%;
        padding:5%;
        margin-top: 2%;
    }

    .info-card h4, p{
        text-align: center;
    }
    /* /* p{
    font-size:1.5rem;
    width:25%;
    border:solid black;
    background-color:slateblue;
    padding:1%;
    border: solid 3px orange;
    text-align:center;
    } */

    /* img{
    margin-bottom:1%;
    width:500px;
    height:300px;
    border: solid 3px orange;
    border-radius:50px;
    } */

    /* h1{
    font-size:3rem;
    color:Orange;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    margin-top: 5%;
    }

    h4{
    font-size:2rem;
    color:Orange;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    } */

    h3{
    font-size:2rem;
    color:Orange;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    }

    h2{
    font-size:2rem;
    color:Orange;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    }



    /* button{
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
        color:orange;
        text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
     }
    } */ 

`

const Home = () => {

    return (
        <StyledHome>
            <div className='innerContainer'>
                
                <div className='top-section'> 
                    <div>
                        <h1>Water My Plants</h1>
                        <img src='https://images.unsplash.com/photo-1536069221282-d877868cad6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'/>
                    </div>
                </div>
                
                <div className='info-section'>
                    {/* <div className='info-card'>
                        <h4>My Plants</h4>
                        <p>Create a plant and it will remind you when it's time to 
                        feed that foliage and quench your plants' thirst!</p>
                    </div> */}

                    <div className='info-card'>
                        <h4>Organize</h4>   
                        <p>Keep track of all your plants in one place, access them right from the dashboard.</p>
                    </div>   

                    <div className='info-card'>
                        <h4>Forget</h4>   
                        <p>We keep track of your watering histroy and remind you when to water 
                            so you don't have to remember when you last watered or when to water next</p>
                    </div>   
                    
                    <div className='info-card'>
                        <h4>Record</h4>
                        <p>Quickly record watering so you can get back to your other tasks.</p>     
                    </div> 
                </div>      

                <div className='newPlant-button'>
                    <Link to='/new-plant'>
                        <button>Create a new Plant!</button>
                    </Link>
                </div>
            </div>
        
        </StyledHome>
    )
};

export default Home
