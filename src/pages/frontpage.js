import React, { Component } from 'react';
import Post from './../components/post/post.js';

class Frontpage extends Component {
  render() {
      return (
          <div>
              <h1>Frontpage</h1>
              <Post />
          </div>
      );
  }
}

export default Frontpage;
