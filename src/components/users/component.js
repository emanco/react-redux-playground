// Common libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Include dumb component
import UserView from "./view";

// Include actions
import getUsers from "./actions";


class UserComponent extends Component {
    componentWillMount() {
        this.props.dispatch(getUsers());
    }


    render() {

        let $this = this;

        if (this.props.loading === true || typeof this.props.payload === 'undefined' || Object.keys(this.props.payload).length === 0) {
            return (
                <div>
                    <p>Loading users...</p>
                </div>
            );
        }

        if (this.props.success === false) {
            return (
                <div>
                    <p><strong>Error:</strong> {this.props.payload.message}</p>
                </div>
            );
        }

        return (
            <div>
                {this.props.payload.map(function(user, i) {
                    return <UserView key={i} userid={$this.props.userid} id={user.id} name={user.name} email={user.email} phone={user.phone}/>
                })}
            </div>
        );
    }
}

export default connect((state) => {
    return state.userReducer;
})(UserComponent);