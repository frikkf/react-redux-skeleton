import * as actionTypes from './constants';

const initialState = {
    users:[]
}

const userListReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_USERS_FULLFILLED: 
            return {
                ...state,
                users: action.payload
            }
        case actionTypes.REMOVE_USER:
            return {
                ...state,
                users: state.users.filter( user => user.id !== action.payload )
            }
        case actionTypes.ADD_USER:
            return {
                ...state,
                users: state.users.concat([action.payload])
            }
        default: 
            return state;
    }
}

export default userListReducer;