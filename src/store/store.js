import { routerMiddleware } from 'react-router-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import createHistory from 'history/createBrowserHistory'

/* Epics and Reducers for middleware and store initializing */
import {rootEpics} from './epics';
import {rootReducers} from './reducers';

/* Create the middleware to support Observable streams */
const epicMiddleware = createEpicMiddleware(rootEpics);
const routingMiddleware = routerMiddleware(history);

/* Browerhistory //to be used later */
export const history = createHistory()

/* Enable Redux debugging in Chrome */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/* Create the store with ReduxDebugging(componseEnhancers) and middleware(observable) */
const store = createStore(rootReducers, composeEnhancers(applyMiddleware(epicMiddleware,routingMiddleware)));

export default store;