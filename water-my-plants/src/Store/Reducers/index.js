import { combineReducers } from 'redux'
import { fetchPlants } from './fetchPlantsReducer'
import { saveUsername } from './saveUsernameReducer'

export default combineReducers({
    fetchPlants,
    saveUsername
})