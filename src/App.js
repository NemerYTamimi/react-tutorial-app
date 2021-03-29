import { Component } from 'react'
import CardList from './CardList'
import SearchBox from './SearchBox'
import './App.css'


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
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <scroll>
                    <CardList robots={filteredRobots} />
                </scroll>
            </div>
        )
    }
}

export default App;