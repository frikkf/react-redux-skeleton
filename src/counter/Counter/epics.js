import Rx from "rxjs/Rx";
import * as actionTypes from './actions';


export const storeResultEpic = action$ => {
    
    return action$.filter(action => action.type === actionTypes.STORE_RESULT)
    .delay(2000)
    .map((action) => actionTypes.store_result_fullfilled(action.counter));
}

export const incrementEpic = action$ => {
    
    return action$.filter(action => action.type === actionTypes.INCREMENT)
    .delay(1000) // Asynchronously wait 1000ms then continue
    .mapTo(actionTypes.incrementFullFilled());
}

export const decrementEpic = action$ => {
    
    return action$.filter(action => action.type === actionTypes.DECREMENT)
    .delay(1000) // Asynchronously wait 1000ms then continue
    .mapTo(actionTypes.decrementFullFilled());
}