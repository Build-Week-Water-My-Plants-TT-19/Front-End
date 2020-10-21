import React, { useEffect } from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'
// import PlantPic from '../PictureFolder/plantpic4.png'
import PlantPic from '../PictureFolder/plantpic.png'

 
//---------------- Styling for Home Page -------------------------

document.body.style.backgroundImage = `url(${PlantPic})`
document.body.style.backgroundRepeat= 'no-repeat'
document.body.style.backgroundSize = 'cover'
document.body.style.backgroundAttachment = 'fixed'


// ------------------------- basic styles -----------------------
const StyledHome = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    min-height: 100vh;

    .innerContainer{
        display: flex;
        flex-direction: column;
        align-self: center;
        width: 50%;
        margin-top: 12%;
        margin-bottom: 7%;
        border-radius: 20px;
        border: 2px solid black;
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

    .info-section h2{
        align-self:start;
    }

    .newPlant-button{
        display:flex;
        justify-content:center;
        align-self: center;
        background-color:mistyrose;
        margin-top:5%;
        margin-bottom: 5%;
    }

    .newPlant-button button{
        border-radius: 20px;
        padding: 5%;
        background: lightblue;
        font-size: 1rem;
    }

    .info-section{
        display: flex;
        flex-direction: column;
        align-items: center;
        background: coral;
        padding: 5%;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
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
`

const Home = () => {

    return (
        <StyledHome>
            <div className='innerContainer'>
                
                <div className='top-section'> 
                    <h1>Water My Plants</h1>
                    <img src='https://images.unsplash.com/photo-1536069221282-d877868cad6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'/>
                

                <div className='newPlant-button'>
                        <Link to='/new-plant'>
                            <button>Create a new Plant!</button>
                        </Link>
                </div>

                </div>
                
                <div className='info-section'>
                    <h2>What we offer...</h2>
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

                
            </div>
        
        </StyledHome>
    )
};

export default Home
