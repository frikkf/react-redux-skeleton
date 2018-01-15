import axios from 'axios';
import Rx from 'rxjs/Rx';
import * as actions from './actions';
import * as actionTypes from './constants';

export const login = action$ => {
    return action$.filter(action => action.type === actionTypes.LOGIN)
    .do(() => {
        console.log("[login] setting localstorage");
        localStorage.setItem('isLoggedIn', true)}
    )
    .mapTo(actions.loginSuccess());
}