
import {increment,decrement,add,subtract,save_result,delete_result} from './actions';

export const props = state => {
    return {
        ctr:state.ctr.counter,
        storedResults:state.res.results
    };
}

export const dispatchers = dispatch => {
    return {
        onIncrementCounter: () => dispatch(increment()),
        onDecrementCounter: () => dispatch(decrement()),
        onAddCounter: () => dispatch(add(5)),
        onSubtractCounter: () => dispatch(subtract(5)),
        onStoreResult: (counter) => dispatch(save_result(counter)),
        onDeleteResult: (id) => dispatch(delete_result(id))
    };
}