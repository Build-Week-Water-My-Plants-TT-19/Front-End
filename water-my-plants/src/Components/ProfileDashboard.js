import React, { useEffect } from 'react'
import PlantCard from './PlantCard'
import { useState } from 'react'
import { fetchPlants } from '../Store/Actions'
import {saveUsername} from '../Store/Actions'
import { connect } from 'react-redux';
import axios from 'axios';


const ProfileDashboard = (props) =>{
  // const { fetchPlants, plants } = props
  const [plants, setPlants] = useState([])
  const { username } = props 

  useEffect(() => {
    // fetchPlants();
    axios.get(`https://chrisjcorbin-watermyplants.herokuapp.com/plants/userName/${username}`)
            .then(res => {
                setPlants(res.data)
            })
            .catch(err => {
                console.log(err)
            })
  }, [])

    return(
        <div className='profile'>
            <h1>My PLANTS</h1>
            {
              plants.map(plant => (
                  <PlantCard key={plant.id} plant={plant} />
              ))
            }
        </div>
    )
}

const mapStateToProps = state => {
  return {
    username: state.saveUsername.username
  }
}

export default connect(mapStateToProps, { saveUsername })(ProfileDashboard);


// const mapStateToProps = state => {
//   return {
//     plantsIsLoading: state.fetchPlants.isLoading,
//     plantsError: state.fetchPlants.error,
//     plants: state.fetchPlants.plants
//   }
// }

// export default connect(mapStateToProps, { fetchPlants })(ProfileDashboard);