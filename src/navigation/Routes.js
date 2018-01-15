import React from 'react';
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from './PrivateRoute';

import Counter from '../counter/Counter/Counter';
import {UserList} from '../users/index';
import {Login} from '../authentication/index';

const Routes = () => (
    <div>
        <Switch>
            <PrivateRoute exact path="/" component={UserList}></PrivateRoute>
            <PrivateRoute path="/users" component={UserList}></PrivateRoute>
            <PrivateRoute path="/counter" component={Counter}></PrivateRoute>
            <Route path="/login" component={Login} />
        </Switch>
    </div>
);

export default Routes;