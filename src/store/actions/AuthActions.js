import {
    formatError,
    saveTokenInLocalStorage,
    signin,
} from '../../services/AuthService';

export const LOGIN_CONFIRMED_ACTION = '[login action] confirmed login';
export const LOGIN_FAILED_ACTION = '[login action] failed login';
export const LOADING_TOGGLE_ACTION = '[Loading action] toggle loading';
export const LOGOUT_ACTION = '[Logout action] logout action';


export function logout(history) {

    localStorage.removeItem('CDB-marketplace-user-detail');
    history("/signin")
    return {
        type: LOGOUT_ACTION,
    };
}

export function loginAction(email, password, navigation) {
    return (dispatch) => {
        signin(email, password)
            .then((response) => {
                saveTokenInLocalStorage(response.data.data);
                dispatch(loginConfirmedAction(response.data.data));
                navigation("/")
            })
            .catch((error) => {
                const errorMessage = formatError(error.toString());
                dispatch(loginFailedAction(errorMessage));
            });
    };
}

export function loginFailedAction(data) {
    return {
        type: LOGIN_FAILED_ACTION,
        payload: data,
    };
}

export function loginConfirmedAction(data) {
    return {
        type: LOGIN_CONFIRMED_ACTION,
        payload: data,
    };
}


export function loadingToggleAction(status) {
    return {
        type: LOADING_TOGGLE_ACTION,
        payload: status,
    };
}
