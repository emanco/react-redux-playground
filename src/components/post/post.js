import React, { Component } from 'react';
import PostView from './view.js';
import { connect } from 'react-redux';
import getPosts from './actions.js';

class Post extends Component {
    componentWillMount() {
        this.props.dispatch(getPosts());
    }

    render() {
        if (this.props.loading === true || typeof this.props.payload === 'undefined' || Object.keys(this.props.payload).length === 0) {
            return (
                <div>
                    <p>Loading posts...</p>
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
               {this.props.payload.map(function(post, i) {
                   return <PostView thumbnail={post.data.thumbnail}
                                    key={i}
                                    title={post.data.title}
                                    author={post.data.author}
                                    url={post.data.permalink} />
               })}
            </div>
        );
    }
}

export default connect((state) => {
    return state.postReducer;
})(Post);
