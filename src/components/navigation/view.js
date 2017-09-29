import React, { Component } from 'react';
import {Link} from "react-router-dom";

class NavigationView extends Component {
    render() {

        return (
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/users">Users</Link></li>
                    <li><Link to="/example">Example</Link></li>
                    <li><Link to='/example/36'>Example ID</Link></li>
                    <li><Link to="/r">Reddit</Link></li>
                </ul>
            </nav>
        );
    }
}

export default NavigationView;