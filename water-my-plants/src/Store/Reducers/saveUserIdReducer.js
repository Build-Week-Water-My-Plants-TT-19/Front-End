import { SAVE_USERID, } from '../Actions'

const initialState = {
    userid: 0
}

export const saveUserId = (state = initialState, action) => {
    switch(action.type) {
        case SAVE_USERID:
            return {
                ...initialState,
                userid: action.payload
            }
        default: 
            return state;
    }
}