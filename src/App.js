import React, { Component } from 'react';
import './App.css';
import Card from './components/Card'
class App extends Component {
  
  state = {
    characters: [],
    house: ""
  }

  componentDidMount() {
    fetch('http://hp-api.herokuapp.com/api/characters')
      .then(response => response.json())
      .then(characters => this.setState({characters: characters}))
  }

  setHouseState = (event) => {
    return this.setState({house: event.target.innerText})
  }

  renderHouse = () => this.state.characters.map(character => {
      return <Card character={character} house={this.state.house}/>
    })
  
  render() {
    return (
      <div className="App">
        <button onClick={this.setHouseState}>Gryffindor</button>
        <button onClick={this.setHouseState}>Slytherin</button>
        <button onClick={this.setHouseState}>Hufflepuff</button>
        <button onClick={this.setHouseState}>Ravenclaw</button>
        {this.state.house === "" ? null : this.renderHouse()}
      </div>
    );
  }
}

export default App;
