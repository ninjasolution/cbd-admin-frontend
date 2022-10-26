import axios from 'axios';
import swal from "sweetalert";
import { backendLink } from '../config';
import {
    loginConfirmedAction,
    logout,
} from '../store/actions/AuthActions';

export function signin(email, password) {

    const postData = {
        email,
        password,
    };

    return axios.post(
        `${backendLink}/api/auth/signin`,
        postData,
    );
}


export function formatError(errorResponse) {
    
    if (errorResponse.includes('EMAIL_EXISTS')) {
        swal("Oops", "Email already exists", "error");
        return;
    } else if (errorResponse.includes('USERNAME_EXISTS')) {
        swal("Oops", "User name already exists", "error");
        return;
    } else if (errorResponse.includes('EMAIL_NOT_EXISTS')) {
        swal("Oops", "Email not found", "error", { button: "Try Again!", });
        return;
    } else if (errorResponse.includes('INVALID_PASSWORD')) {
        swal("Oops", "Invalid Password", "error", { button: "Try Again!", });
        return;
    }else if (errorResponse.includes('ROLE_NOT_EXISTS')) {
        swal("Oops", "Role doesn't exist", "error");
        return;
    }else if (errorResponse.includes('Wallet')) {
        swal("Oops", "Go to wallet connect", "error");
        return;
    }else {
        swal("Oops", "Has something wrong", "error", { button: "Try Again!", });
    }
}

export function saveTokenInLocalStorage(tokenDetails) {
    var token = {
        token: tokenDetails.token,
        expiresIn: new Date(
            new Date().getTime() + tokenDetails.expiresIn,
        ),
        user: tokenDetails.user
    }
    localStorage.setItem('CDB-marketplace-user-detail', JSON.stringify(token));
}

export function saveReferralCodeInLocalStorage(address) {
    localStorage.setItem('CDB-marketplace-referral-cdoe', address);
}

export function runLogoutTimer(dispatch, timer, history) {
    setTimeout(() => {
        dispatch(logout(history));
    }, timer);
}

export function checkAutoLogin(dispatch, history) {
    const tokenDetailsString = localStorage.getItem('CDB-marketplace-user-detail');
    let tokenDetails = '';

    if (!tokenDetailsString) {
        dispatch(logout(history));
        return;
    }

    tokenDetails = JSON.parse(tokenDetailsString);
    let expireDate = new Date(tokenDetails.expiresIn);
    let todaysDate = new Date();

    if (todaysDate > expireDate) {
        dispatch(logout(history));
        return;
    }
    dispatch(loginConfirmedAction(tokenDetails));

    const timer = expireDate.getTime() - todaysDate.getTime();
    console.log(expireDate.getTime(), todaysDate.getTime(), tokenDetails.expiresIn)
    runLogoutTimer(dispatch, timer, history);
}
