import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link, useParams, useHistory } from 'react-router-dom'
// import { fetchPlants } from '../Store/Actions'
// import { connect } from 'react-redux';

import styled from 'styled-components';

const PlantPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 94vh;
    

    .plantCard{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #ECF1EB;
        border: 2px solid black;
        width: 50%;
        padding: 2%;
        box-shadow: 5px 5px 5px 5px darkgray;
        border-radius: 12px;
        border: 1px solid black;
    }

    .edit-button{
        border: 1px solid black;
        padding-left: 4.5%;
        padding-right: 4.5%;
        padding-top: 1%;
        padding-bottom: 1%;
        border-radius: 10px;
        background: lightblue;
        margin-bottom: 1%;
    }

    .delete-button{
        border: 1px solid black;
        padding-left: 3%;
        padding-right: 3%;
        padding-top: 1%;
        padding-bottom: 1%;
        border-radius: 10px;
        background: lightblue;
    }
`

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
        <PlantPage>
            <div className='plantCard'>
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
        </PlantPage>
        
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