import React, {useState, useEffect} from 'react'
import axios from 'axios'
const PlantCard = (props) =>{
    //setting card state
    const[plants, setPlants] = useState([]);
    const { plant } = props
    //wrap axios in useEffect

    useEffect(()=>{
        axios.get('https://reqres.in/api/register')
        .then(response=>{
            setPlants(response.data.data)
        })
        .catch(error=>{
            console.log('THIS IS YOUR ERROR------>', error)
        })
    },[])


    return(
        <div>
            <h1>Name: {plant.nickname}</h1>
            <p>Species: {plant.species}</p>
            <p>H2O Frequency: {plant.h2oFrequency}</p>
        </div>
    )

}

export default PlantCard