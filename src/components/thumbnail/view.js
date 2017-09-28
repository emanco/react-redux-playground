import React, { Component } from 'react';

class ThumbnailView extends Component {

    src = 'http://placehold.it/200';

    componentWillMount() {
        if (this.props.src !== 'undefined' && this.props.src !== 'self' && this.props.src !== 'default') {
            this.src = this.props.src;
        }
    }

    render() {
        return (
            <img src={this.src} alt={this.src} />
        );
    }
}

export default ThumbnailView;
