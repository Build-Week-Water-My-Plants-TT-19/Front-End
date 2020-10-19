import React, {useState} from 'react'
import axios from 'axios'
const PlantCard = () =>{
    //setting card state
    const[plants, setPlants] = useState([]);

    axios.get('https://reqres.in/api/register')
    .then(response=>{
        setPlants(response.data.data)
    })
    .catch(error=>{
        console.log('THIS IS YOUR ERROR------>', error)
    })

    return(
        <div>
            <h1> Your Plants </h1>
            {plants.map(plant=>{
                return(
                    <div key={plant.id}>
                    <h1>Name: {plant.name}</h1>
                    <p>Year: {plant.year}</p>
                    <p>Pantone Value: {plant.pantone_value}</p>
                    </div>
                )
            })}
        </div>
    )

}

export default PlantCard