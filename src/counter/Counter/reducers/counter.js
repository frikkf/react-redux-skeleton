import * as actionTypes from '../actions';

const initialState = {
    counter:0
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT_FULLFILLED:
            return {
                ...state,
                counter: state.counter + 1
            }
        case actionTypes.DECREMENT_FULLFILLED:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.value
            }
        default: 
            return state;
        
    }
}

export default counterReducer;