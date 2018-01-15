import * as actionTypes from '../actions';

const initialState = {
    results:[]
}

const resultsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT_FULLFILLED: 
            return {
                ...state,
                results: state.results.concat({id:new Date(), value:action.counter})
            }
        case actionTypes.DELETE_RESULT:
            const newArray = state.results.filter( (result) => result.id !== action.id ); 
            return {
                ...state,
                results: newArray
            }
        default: 
            return state;
        
    }
}

export default resultsReducer;