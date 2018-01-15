import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'

import counterReducer from '../counter/Counter/reducers/counter';
import resultReducer from '../counter/Counter/reducers/result';
import userListReducer from '../users/reducers';
import * as login from '../login/index';

export const rootReducers = combineReducers({
    routing: routerReducer,
    ctr:counterReducer,
    res:resultReducer,
    users:userListReducer,
    form:formReducer,
    login: login.reducer
});