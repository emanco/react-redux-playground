import React, { Component } from 'react';
import ExampleComponent from "../components/example/component";

class Examplepage extends Component {

    constructor(props) {
        super();

        let id = props.match.params.id;
        console.log('yeh? ',{id});
    }


    componentWillMount() {
        console.log('mounted!');
    }



    render() {

        const RenderID = (props) => {
            const hasID = props.id ? props.id : false;

            if (hasID) {
                return (
                    <p>Found id number: {props.id}</p>
                );
            } else {
                return (
                    <p>No id found!</p>
                );
            }
        };

        return (
            <div>
                <ExampleComponent/>
                <RenderID id={this.props.match.params.id}/>

            </div>


        );
    }
}

export default Examplepage;
