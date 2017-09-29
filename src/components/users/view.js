import React, { Component } from 'react';

class UserView extends Component {
    render() {

        if (this.props.userid === undefined) {
            return (
                <div>
                    <p>ID: {this.props.id}</p>
                    <p>Name: {this.props.name}</p>
                    <p>Email: {this.props.email}</p>
                    <p>Phone: {this.props.phone}</p>

                    <a href={"/users/"+this.props.id}>Profile</a>
                    <hr/>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default UserView;