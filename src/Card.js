import React, { Component } from 'react';

function fetch() {
    return new Promise(resolve => setTimeout(() => resolve(42), 1000));
}

function fetchAPI(param) {
    // param is a highlighted word from the user before it clicked the button
    return fetch(param);
}

class Card extends Component {
    constructor(props) {
        super(props);
        this.snap = props.snap;
        this.name = props.name;
        this.src = props.src;
        this.location = props.location;
    }
    state = { result: null };

    toggleButtonState = () => {
        fetchAPI(this.snap).then(result => {
            this.setState({ result });
        });
    };
    render() {
        return (
            <div className='bg-dark-gray dib-ns br3 pa3 ma2  bw2 shadow-5'>
                <img id="image0" src={this.src} width="400px" height="400px"></img>
                <div>
                    <h1>{this.name}</h1>
                    <h2 className='white'>{this.location}</h2>
                    {/* <button onClick={this.toggleButtonState}> Take a Snap </button> */}
                    <a
                        href={this.snap}
                        download
                        target="_blank"
                    >Take a Snap</a>
                        <div>{this.state.result}</div>
                </div>
                </div>
        );
    }
}
export default Card;
