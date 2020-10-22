import React, { useEffect } from 'react'
import PlantCard from './PlantCard'
import { useState } from 'react'
import { fetchPlants } from '../Store/Actions'
import {saveUsername} from '../Store/Actions'
import { connect } from 'react-redux';
import axios from 'axios';

import styled from 'styled-components'

const DashboardPage = styled.div`
  height: 94vh;

  .plantCard-container{
    display:flex;
    justify-content:center;
    align-items:center;
    padding-top:10%;
    padding-bottom:10%;

    

  }

  .plantCard-container h1{
    font-size: 3.5rem;
    color:white;
    text-decoration: underline;
    text-shadow: 2px 2px 5px black;

    @media (max-width: 480px){
      font-size: 2rem;
    }

  }

  .plantCard-Wrapper{
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    width: 75%;

    @media (max-width: 480px){
      margin-top: 18%;
    }
  }

  h2{
    padding-left: 2%;
    color: white;
  }

  
`


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
        <DashboardPage>

          <div className='plantCard-container'>
      
            <h2>Welcome back, {username}</h2>
            
            <div className='plantCard-Wrapper'>
              <h1> My Plants</h1> 
              {
                plants.map(plant => (
                    <PlantCard key={plant.id} plant={plant} />
                ))
              }
            </div>

          </div>
        </DashboardPage>
    )
}

const mapStateToProps = state => {
  return {
    username: state.saveUsername.username
  }
}

export default connect(mapStateToProps, { saveUsername })(ProfileDashboard);
