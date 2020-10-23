export const SAVE_USERID = 'SAVE_USERID';

export const saveUserId = (userid) => {
    return dispatch => {
        dispatch({ type: SAVE_USERID, payload: userid });
    }
}