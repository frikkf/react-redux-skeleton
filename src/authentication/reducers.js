import * as actionTypes from './constants';

const initialState = {
    isLoggedIn:false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN: 
            return {...state}
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true
            }
        case actionTypes.LOGIN_FAILURE:
            return {
                ...state,
                isLoggedIn: false
            }
        default: 
            return state;
    }
}

export default reducer;