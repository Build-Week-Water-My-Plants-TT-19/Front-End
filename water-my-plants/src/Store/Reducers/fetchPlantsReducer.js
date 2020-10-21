import { FETCH_PLANT_DATA, FETCH_PLANT_DATA_SUCCESS, FETCH_PLANT_DATA_ERROR, } from '../Actions'

const initialState = {
    plants: [],
    isLoading: false,
    error: '',
}

export const fetchPlants = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_PLANT_DATA:
            return {
                ...initialState,
                isLoading: true
            }
        case FETCH_PLANT_DATA_SUCCESS:
            return {
                ...initialState,
                plants: action.payload
            }
        case FETCH_PLANT_DATA_ERROR:
            return {
                ...initialState,
                error: action.payload
            }
        default: 
            return state;
    }
}