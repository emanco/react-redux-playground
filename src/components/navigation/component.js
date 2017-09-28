// Common libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Include dumb component
import NavigationView from "./view";

// Include actions
import {initialised} from "./actions";


class NavigationComponent extends Component {
    componentWillMount() {
        this.props.dispatch(initialised());
    }

    render() {

        return (
           <NavigationView/>
        );
    }
}

export default connect((state) => {
    return state.navigationReducer;
})(NavigationComponent);