import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'

import Header from './navigation/Header';
import Counter from './counter/Counter/Counter';
import {UserList} from './users/index';
import {Login, PrivateRoute} from './authentication/index';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <PrivateRoute exact path="/" component={Counter} />
                <Route path="/login" component={Login} />
                <Route path="/counter" component={Counter}/>
            </div>
        );
    }
}

export default App;