import React, { Component } from 'react';

class TestView extends Component {
    render() {

        return (
            <div>
                <button onClick={this.props.clickFunction}>Example Component!</button>
                <p>Has been clicked {this.props.number} times.</p>
            </div>
        );
    }
}

export default TestView;