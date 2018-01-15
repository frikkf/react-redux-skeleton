import React, { Component } from 'react';
import {props, dispatchers} from './LoginProps';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

import LoginForm from './components/LoginForm';

class Login extends Component {

    render () {
        return (
            <div>
                <h1>Login Component</h1>
                <LoginForm onSubmit={this.props.onLogin}/>
                {this.props.isLoggedIn
                ? <Redirect to='/counter' />
                : <p>Is Not Logged In</p>}
            </div>
        );
    }
}

export default connect(props, dispatchers)(Login);