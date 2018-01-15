import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

export const PrivateRoute = ({ component: Component, ...rest }) => { 
    
    const isLoggedIn = () => {
        const lstorage = localStorage.getItem('isLoggedIn');
        console.log("Is user logged in: ", lstorage);
        return lstorage;
        
    }
    return (
    <Route {...rest} render={props => (
        isLoggedIn()
            ? <Component {...props} />
            : <Redirect to='/login' />
    )} />
    );
}
const mapStateToProps = state => {
    return {
        isLoggedIn: state.login.isLoggedIn
    };
}


export default connect(mapStateToProps)(PrivateRoute);