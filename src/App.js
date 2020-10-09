import React, { Component } from 'react';
import './App.css';
import Card from './components/Card'
import StudentForm from './components/StudentFrom'
export default class App extends Component {
  
  state = {
    characters: [],
    house: "",
    newCharacters: []
  }

  componentDidMount() {
    fetch('http://hp-api.herokuapp.com/api/characters')
      .then(response => response.json())
      .then(characters => this.setState({characters: characters}))
      .then(this.fetchStudents())
  }

  fetchStudents = () => {
    fetch('http://localhost:7000/students')
              .then(response => response.json())
              .then(newCharacters => this.setState({newCharacters: newCharacters}))
  }

  setHouseState = (event) => {
    return this.setState({house: event.target.innerText})
  }

  renderHouse = () => this.state.characters.map(character => {
      return <Card character={character} house={this.state.house}/>
    })

  addNewCharacter = (character) => {
    this.setState({
      characters: [...this.state.characters, character]
    })

    fetch('http://localhost:7000/students', {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        name: character.name,
        house: character.house
      })
    }).then(this.fetchStudents())
  }

  showNewCharacters = () => {
    return this.state.newCharacters.map(character => {
      return (
          <div>
              <h3>{character.name}</h3>
              <p>{character.house}</p>
          </div>
      )
    })
  }

  render() {
    return (
      <div className="App">
        <header>
          <button onClick={this.setHouseState}>Gryffindor</button>
          <button onClick={this.setHouseState}>Slytherin</button>
          <button onClick={this.setHouseState}>Hufflepuff</button>
          <button onClick={this.setHouseState}>Ravenclaw</button>
        </header>
        <main>
          <StudentForm addNewCharacter={this.addNewCharacter}/>
          <div className="container">
            {this.state.house === "" ? null : this.renderHouse()}
          </div>
          <ul>{this.showNewCharacters()}</ul>
        </main>
      </div>
    );
  }
}


