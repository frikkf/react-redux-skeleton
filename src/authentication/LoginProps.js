
import {login} from './actions';

export const props = state => {
    return {
        isLoggedIn: state.login.isLoggedIn
    };
}

export const dispatchers = dispatch => {
    return {
        onLogin: () => dispatch(login())
    };
}