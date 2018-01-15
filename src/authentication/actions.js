import * as actionTypes from './constants';

export const login = () => {
    return {
        type: actionTypes.LOGIN
    };
};

export const loginSuccess = () => {
    return {
        type: actionTypes.LOGIN_SUCCESS
    }
}


export const loginFailure = () => {
    return {
        type: actionTypes.LOGIN_FAILURE
    }
}