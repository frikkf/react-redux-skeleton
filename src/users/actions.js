import 'rxjs';

import * as actionTypes from './constants';

export const fetchUsers = () => {
    return {
        type: actionTypes.FETCH_USERS
    };
};

export const fetchUsersFullFilled = (users) => {
    return {
        type: actionTypes.FETCH_USERS_FULLFILLED,
        payload: users
    };
};

export const removeUser = (id) => {
    return {
        type: actionTypes.REMOVE_USER,
        payload:id
    }
}

export const addUser = values => {
    return {
        type: actionTypes.ADD_USER,
        payload:values
    }
}
