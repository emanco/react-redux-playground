import React, { Component } from 'react';

class NavigationView extends Component {
    render() {

        return (
            <div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/example">Example</a></li>

                </ul>
            </div>
        );
    }
}

export default NavigationView;