import axios from 'axios';
import Rx from 'rxjs/Rx';
import * as actions from './actions';
import * as actionTypes from './constants';

export const fetchUsersEpic = action$ => {
    return action$.filter(action => action.type === actionTypes.FETCH_USERS)
    .flatMap((action) => Rx.Observable.fromPromise(axios.get('https://jsonplaceholder.typicode.com/users')))
    .map((response) => response.data)
    .map((users) => actions.fetchUsersFullFilled(users));
}