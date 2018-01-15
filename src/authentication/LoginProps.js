
import {login} from './actions';

export const props = state => {
    console.log("LOGINSTATE",state);
    return {
        isLoggedIn: state.login.isLoggedIn,
        redirect: state.routing.location.state.from
    };
}

export const dispatchers = dispatch => {
    return {
        onLogin: () => dispatch(login())
    };
}