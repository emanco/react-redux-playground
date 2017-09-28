import React, { Component } from 'react';
import "./styles.css";


class CommentView extends Component {
    render() {
        return (
            <li className="comment-item">
                {this.props.comment}
                <br />
                <strong>Author:</strong> {this.props.author}
            </li>
        );
    }
}

export default CommentView;
