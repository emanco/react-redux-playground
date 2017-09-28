// Common libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Include dumb component
import ExampleView from "./view";

// Include actions
import {userIdle, userClick} from "./actions";


class ExampleComponent extends Component {
    componentWillMount() {
        this.props.dispatch(userIdle());
    }

    render() {

        let $this = this;

        function onClick() {
            $this.props.dispatch(userClick());
        }

        return (
           <ExampleView clickFunction={onClick} number={this.props.number} />
        );
    }
}

export default connect((state) => {
    return state.exampleReducer;
})(ExampleComponent);