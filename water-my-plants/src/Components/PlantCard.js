import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import styled  from 'styled-components'



const PlantCardWrapper = styled.div`
    /* display: flex;
    justify-content: center; */
    width: 75%;
    
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
                    <p>Name: {plant.name}</p>
                    <p>Location: {plant.location}</p>
                    <p>H2O Frequency: {plant.h2oFrequency}</p>
                </Link>
            </div>
        </PlantCardWrapper>
        
        
    )

}

export default PlantCard