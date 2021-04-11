import { Component } from 'react'
import Particles from "react-tsparticles";

import CardList from './CardList'
import SearchBox from './SearchBox'
import './App.css'

const Particlesoptions = { fpsLimit: 50, interactivity: { detectsOn: "canvas", events: { onClick: { enable: true, mode: "push", }, onHover: { enable: true, mode: "repulse", }, resize: true, }, modes: { bubble: { distance: 400, duration: 2, opacity: 0.8, size: 40, }, push: { quantity: 4, }, repulse: { distance: 200, duration: 0.4, }, }, }, particles: { color: { value: "#ffffff", }, links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.5, width: 1, }, collisions: { enable: true, }, move: { direction: "none", enable: true, outMode: "bounce", random: false, speed: 2, straight: false, }, number: { density: { enable: true, value_area: 800, }, value: 70, }, opacity: { value: 0.5, }, shape: { type: "circle", }, size: { random: true, value: 5, }, }, detectRetina: true, }

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        };
    }



    componentDidMount() {
        fetch('https://mongodb-tutorial-app.herokuapp.com/cameras/cam/')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))
    }
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if (this.state.robots.length === 0) {
            return <h1>Loading</h1>
        }
        return (
            <div className='tc'>
                <Particles className="particles" options={Particlesoptions} />
                <h1 className='f1'>IPCam Viewer</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <scroll>
                    <CardList robots={filteredRobots} />
                </scroll>
            </div>
        )
    }
}

export default App;