import React, { Component } from 'react';
import UserComponent from './../components/users/component';

class Userspage extends Component {
  render() {
      return (
          <div>
              <h1>Users page</h1>
              <UserComponent userid={this.props.match.params.userid}/>
          </div>
      );
  }
}

export default Userspage;
