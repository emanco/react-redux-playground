import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { getSinglePost } from './../components/post/actions.js';
import Thumbnail from './../components/thumbnail/view.js';
import Comment from './../components/comment/comment.js';

class SinglePost extends Component {
    componentWillMount() {
        this.props.dispatch(getSinglePost(this.props.match.url));
    }

    render() {
        if (this.props.loading === true || typeof this.props.post === 'undefined' || Object.keys(this.props.post).length === 0) {
            return (
                <div>
                    <p>Loading post...</p>
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

                <h1>Single post page</h1>
                <Link to='/'>Home</Link>
                <br />

                <h2>{this.props.post.title}</h2>
                <Thumbnail src={this.props.post.url} />

                <h2>Comments</h2>
                {this.props.comments.map(function(comment, i) {
                    return <Comment
                        key={i}
                        author={comment.data.author}
                        comment={comment.data.body}
                        replies={comment.data.replies}
                    />
                })}
            </div>
        );
    }
}

export default connect((state) => {
    state = state.postReducer;

    if (typeof state === 'undefined' || Object.keys(state).length === 0 || state.loading === true || state.success === false) {
        return state;
    }

    if (typeof state.payload[0].data.children === 'undefined' || Object.keys(state.payload[0].data.children).length === 0 || state.loading === true || state.success === false) {
        return state;
    }

    return {
        post: state.payload[0].data.children[0].data,
        comments: state.payload[1].data.children
    };
})(SinglePost);