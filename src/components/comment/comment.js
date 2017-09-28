import React, { Component } from 'react';
import CommentView from './view.js';

class Comment extends Component {
    render() {
        if (typeof this.props.replies === 'undefined' || Object.keys(this.props.replies).length === 0) {
            return (
                <ul>
                    <CommentView
                        comment={this.props.comment}
                        author={this.props.author}
                    />
                </ul>
            )
        }

        return (
            <ul>
                <CommentView
                    comment={this.props.comment}
                    author={this.props.author}
                />

               {this.props.replies.data.children.map(function(reply, i) {
                   return <Comment
                       key={i}
                       comment={reply.data.body}
                       author={reply.data.author}
                       replies={reply.data.replies}
                   />
               })}
            </ul>
        );
    }
}

export default Comment;
