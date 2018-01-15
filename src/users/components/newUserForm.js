import React from 'react'
import {Field, reduxForm} from 'redux-form'

const NewUserForm = props => {
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
                <button type="submit" disabled={pristine || submitting}>
                    Submit
                </button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>
                    Clear Values
                </button>
            </div>
        </form>
    )
};

export default reduxForm({form: 'NewUserForm'})(NewUserForm);
