import React, { Component } from 'react';

class TestView extends Component {
    render() {

        return (
            <div>
                <button onClick={this.props.clickFunction}>Hello, Test!</button>
                <p>Has been clicked? {this.props.number}</p>
            </div>
        );
    }
}

export default TestView;