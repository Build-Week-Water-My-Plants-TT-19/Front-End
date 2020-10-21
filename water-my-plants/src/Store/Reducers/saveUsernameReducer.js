import { SAVE_USERNAME, } from '../Actions'

const initialState = {
    username: ''
}

export const saveUsername = (state = initialState, action) => {
    switch(action.type) {
        case SAVE_USERNAME:
            return {
                ...initialState,
                username: action.payload
            }
        default: 
            return state;
    }
}