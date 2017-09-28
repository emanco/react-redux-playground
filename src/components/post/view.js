import React, { Component } from 'react';
import ThumbnailView from './../thumbnail/view.js';
import { Link } from 'react-router-dom';
import "./styles.css";

class PostView extends Component {
    render() {
        if (typeof this.props.url === 'undefined' || Object.keys(this.props.url).length === 0) {
            return null;
        }

        return (
            <ul className="posts">
                 <li>
                     <ThumbnailView src={this.props.thumbnail} />
                 </li>
                 <li>
                     <Link to={this.props.url}>
                         <strong>Title:</strong> {this.props.title}
                     </Link>
                 </li>
                 <li><strong>Author:</strong> {this.props.author}</li>
            </ul>
        );
    }
}

export default PostView;
