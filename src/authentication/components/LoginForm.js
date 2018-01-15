import React from 'react'
import {Field, reduxForm} from 'redux-form'

const LoginForm = props => {
    const {handleSubmit, pristine, reset, submitting} = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name</label>
                <div>
                    <Field name="name" component="input" type="text" placeholder="Name"/>
                </div>
            </div>
            <div>
                <label>Password</label>
                <div>
                    <Field name="password" component="input" type="password" placeholder="Password"/>
                </div>
            </div>
            <div>
                <button type="submit" disabled={pristine || submitting}>
                    Login
                </button>
            </div>
        </form>
    )
};

export default reduxForm({form: 'LoginForm'})(LoginForm);
