import { combineReducers } from 'redux'
import { fetchPlants } from './fetchPlantsReducer'
import { saveUsername } from './saveUsernameReducer'
import { saveUserId } from './saveUserIdReducer'

export default combineReducers({
    fetchPlants,
    saveUsername,
    saveUserId
})