import React, { Component } from 'react';
import {props, dispatchers} from './UserListProps';
import {connect} from 'react-redux';

import NewUserForm from './components/newUserForm';

class UserList extends Component {

    componentDidMount() {
        this.props.onFetchUsers();
    }

    render () {
        return (
            <div>
                <h1>User list works </h1>
                <ul>
                    {this.props.users.map( user => (
                    <li key={user.id} onClick={() => this.props.onRemoveUser(user.id)}> {user.name}</li>
                    ))}
                </ul>
                <NewUserForm onSubmit={this.props.onAddUser} />
            </div>
        );
    }
}

export default connect(props, dispatchers)(UserList);