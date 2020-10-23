import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import styled  from 'styled-components'



const PlantCardWrapper = styled.div`
    /* display: flex;
    justify-content: center; */
    width: 75%;

    /* * {
        border: 1px solid black;
    }
     */
    .plant-card {
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;
        border: 1px solid black;
        height: 20vh;
        background: mistyrose;
        box-shadow: 5px 5px 5px 5px darkgray;
        border-radius: 12px;
        border: 1px solid black;
        margin-top: 1%;
        
    }

    /* .plant-card img {
        width: 10%;
    } */
`

const PlantCard = (props) =>{
    //setting card state
    const[plants, setPlants] = useState([]);
    const { plant } = props

    return(
        
        <PlantCardWrapper>
            <div className='plant-card'>
                <Link to={`/plants/plant/${plant.plantid}`}>
                {/* <img src="https://www.webweaver.nu/clipart/img/nature/flowers/potted-plant.png" alt="plant"/> */}
                <div className='plant-card-text'>
                    <h3>Name: {plant.name}</h3>
                    <p>Location: {plant.location}</p>
                    <p>Species: {plant.species}</p>
                    <p>Water every: {plant.schedule} days </p>
                </div>
                    
                </Link>
            </div>
        </PlantCardWrapper>
        
        
    )

}

export default PlantCard