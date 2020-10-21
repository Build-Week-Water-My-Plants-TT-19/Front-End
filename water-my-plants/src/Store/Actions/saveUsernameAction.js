export const SAVE_USERNAME = 'SAVE_USERNAME';

export const saveUsername = (username) => {
    return dispatch => {
        dispatch({ type: SAVE_USERNAME, payload: username });
    }
}