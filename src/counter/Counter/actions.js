import 'rxjs';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const STORE_RESULT_FULLFILLED = 'STORE_RESULT_FULLFILLED';
export const DELETE_RESULT = 'DELETE_RESULT';
export const INCREMENT_FULLFILLED = 'INCREMENT_FULLFILLED';
export const DECREMENT_FULLFILLED = 'DECREMENT_FULLFILLED';



export const increment = () => {
    return {
        type: INCREMENT
    };
};

export const incrementFullFilled = () => {
    return {
        type: INCREMENT_FULLFILLED
    };
};

export const decrement = () => {
    return {
        type: DECREMENT
    };
}

export const decrementFullFilled = () => {
    return {
        type: DECREMENT_FULLFILLED
    };
};

export const add = (value) => {
    return {
        type: ADD, 
        value:value
    };
}

export const subtract = (value) => {
    return {
        type: SUBTRACT, 
        value:value
    };
}

export const save_result = (counter) => {
    return {
        type: STORE_RESULT, 
        counter:counter
    };
}

export const store_result_fullfilled = (counter) => {
    return {
        type: STORE_RESULT_FULLFILLED,
        counter:counter
    };
}



export const delete_result = (id) => {
    return {
        type: DELETE_RESULT, 
        id:id
    };
}