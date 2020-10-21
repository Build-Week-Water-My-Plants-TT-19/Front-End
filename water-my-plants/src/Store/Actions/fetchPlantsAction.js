import axios from 'axios';
import React from 'react';
// import { saveUsername } from '../Store/Actions/saveUsernameAction'
// import { connect } from 'react-redux';

export const FETCH_PLANT_DATA = 'FETCH_PLANT_DATA';
export const FETCH_PLANT_DATA_SUCCESS = 'FETCH_PLANT_DATA_SUCCESS';
export const FETCH_PLANT_DATA_ERROR = 'FETCH_PLANT_DATA_ERROR';

export const fetchPlants = (props) => {
    // const {username } = props

    return dispatch => {
        dispatch({ type: FETCH_PLANT_DATA });
        axios.get('https://chrisjcorbin-watermyplants.herokuapp.com/plants/plants')
            .then(res => {
                dispatch({ type: FETCH_PLANT_DATA_SUCCESS, payload: res.data })
            })
            .catch(err => {
                dispatch({ type: FETCH_PLANT_DATA_ERROR, payload: err })
            })
    }
}

// const mapStateToProps = state => {
//     return {
//       username: state.saveUsername.username
//     }
//   }
  
//   export default connect(mapStateToProps)(fetchPlants);