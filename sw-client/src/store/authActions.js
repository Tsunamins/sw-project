import { AUTH_TOKEN } from '../constants';


export const login = (user) => {
    return dispatch => {
        localStorage.setItem(AUTH_TOKEN, login.token);
        dispatch(sessionUser)
    }
}








export const sessionUser = user => {
    return {
        type: "SESSION_USER"
    }
}




