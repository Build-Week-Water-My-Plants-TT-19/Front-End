import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import styled  from 'styled-components'

const PlantCardWrapper = styled.div`
    display:flex;
    justify-content:flex-start;

    .plant-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid black;
        width: 50%; 
        border:3px solid orange;
        background-color:whitesmoke
    }
    .plant{
        border:3px solid blue;
    }
`

const PlantCard = (props) =>{
    //setting card state
    const[plants, setPlants] = useState([]);
    const { plant } = props
    //wrap axios in useEffect

    // useEffect(()=>{
    //     axios.get('https://reqres.in/api/register')
    //     .then(response=>{
    //         setPlants(response.data.data)
    //     })
    //     .catch(error=>{
    //         console.log('THIS IS YOUR ERROR------>', error)
    //     })
    // },[])


    return(
        <PlantCardWrapper>
            <div className='plant-card'>
            <Link to={`/plants/plant/${plant.plantid}`}>
                <div className='plant'>
                <p>Name: {plant.name}</p>
                <p>Location: {plant.location}</p>
                <p>H2O Frequency: {plant.h2oFrequency}</p>
                </div>
            </Link>
            </div>
        </PlantCardWrapper>
        
        
    )

}

export default PlantCard