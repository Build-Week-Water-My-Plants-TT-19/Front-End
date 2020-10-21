import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import styled  from 'styled-components'

const PlantCardWrapper = styled.div`
    .plant-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid black;
        width: 50%;
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
            <Link to={`/plants/plant/${plant.plantid}`}>
                <div className='plant-card'>
                <p>Name: {plant.name}</p>
                <p>Location: {plant.location}</p>
                <p>H2O Frequency: {plant.h2oFrequency}</p>
                </div>
            </Link>
        </PlantCardWrapper>
        
        
    )

}

export default PlantCard