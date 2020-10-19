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
                    <h1 key={plant.id}>{plant.name}</h1>
                )
            })}
        </div>
    )

}

export default PlantCard