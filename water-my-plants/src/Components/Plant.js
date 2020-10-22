import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link, useParams, useHistory } from 'react-router-dom'
// import { fetchPlants } from '../Store/Actions'
// import { connect } from 'react-redux';

const PlantCard = (props) =>{
    //setting card state
    const[plant, setPlant] = useState([]);
    const history = useHistory()
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

    const deletePlant = () => {
        axios
        .delete(`https://chrisjcorbin-watermyplants.herokuapp.com/plants/plant/${id}`)
        .then(res => {
          history.push('/profile');
        })
        .catch(err => console.log(err));
      }


    return(
        <div>
            <h2>Name: {plant.name}</h2>
            <p>Location: {plant.location}</p>
            <p>H2O Frequency: {plant.h2oFrequency}</p>

            <div className="edit-button" onClick={() => history.push(`/update-plant/${id}`)}>
                Edit
            </div>

            <div className="delete-button" onClick={deletePlant}>
                Delete
            </div>
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