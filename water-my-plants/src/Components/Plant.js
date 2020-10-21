import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
// import { fetchPlants } from '../Store/Actions'
// import { connect } from 'react-redux';

const PlantCard = (props) =>{
    //setting card state
    const[plant, setPlant] = useState([]);
    const { id } = useParams()
    //wrap axios in useEffect

    useEffect(()=>{
        axios.get(`https://chrisjcorbin-watermyplants.herokuapp.com/plants/plant/${id}`)
        .then(response=>{
            setPlant(response.data)
            console.log(response.data)
        })
        .catch(error=>{
            console.log('THIS IS YOUR ERROR------>', error)
        })
    },[id])


    return(
        <div>
            <h2>Name: {plant.name}</h2>
            <p>Location: {plant.location}</p>
            <p>H2O Frequency: {plant.h2oFrequency}</p>
        </div>
        
    )
}

// const mapStateToProps = state => {
//     return {
//       plantsIsLoading: state.fetchPlants.isLoading,
//       plantsError: state.fetchPlants.error,
//       plants: state.fetchPlants.plants
//     }
//   }

// export default connect(mapStateToProps, { fetchPlants })(PlantCard);

export default PlantCard