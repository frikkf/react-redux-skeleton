
import {fetchUsers, removeUser, addUser} from './actions';

export const props = state => {
    return {
        users: state.users.users
    };
}

export const dispatchers = dispatch => {
    return {
        onFetchUsers: () => dispatch(fetchUsers()),
        onRemoveUser: (id) => dispatch(removeUser(id)),
        onAddUser: (values) => dispatch(addUser(values))
    };
}