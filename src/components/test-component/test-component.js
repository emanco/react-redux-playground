import React, { Component } from 'react';
import { connect } from 'react-redux';

import TestView from "./view";
import {userIdle, userClick} from "./actions";

class TestComponent extends Component {
    componentWillMount() {
        this.props.dispatch(userIdle());
    }

    render() {

        let $this = this;

        function onClick() {
            $this.props.dispatch(userClick());
        }

        return (
           <TestView clickFunction={onClick} number={this.props.number} />
        );
    }
}

export default connect((state) => {
    return state.testReducer;
})(TestComponent);