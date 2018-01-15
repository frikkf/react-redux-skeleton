import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import * as mainStore from './store/store';
import App from './App'

const Root = () => (
    <Provider store={mainStore.store}>
        <ConnectedRouter history={mainStore.history} >
            <App />
        </ConnectedRouter>
    </Provider>
)


export default Root;