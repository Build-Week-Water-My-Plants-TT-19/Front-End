import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const StyledHome = styled.div`
    h1{
        font-size:3rem;
        margin-left:40%;
        color:green;
        text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    }

    p{
        margin-left:20%;
        font-size:1.5rem;
        outline-style: dotted blue; 
    }

    button{
        margin-left:46%; 
        border: solid blue;
        background-color: whitesmoke;
        font-weight:bold;
        border-radius:10px;
        width:6%;
        transition: all 1.5s ease-in-out;
        &:hover{
            cursor:pointer;
            background-color:green;
            border:solid red;
            transform:scale(1.3);
            transition: all 1.5s ease-in-out;
        }
    }

`

const Home = (props) => {
    return (
        <StyledHome>
        <div className='home'>
            <h1>Water My Plants</h1>
            <p>Create a plant and it will remind you when it's time to feed that foliage and quench your plants' thirst!</p>
            <Link to='/new-plant'>
                <button>Create a new Plant!</button>
            </Link>
        </div>
        </StyledHome>
    )
};

export default Home;