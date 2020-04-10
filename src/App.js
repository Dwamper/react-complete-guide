import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Dwamper', age: 30 },
      { name: 'Ainvolt', age: 31 },
    ],
    showPersons: false
  }
  switchName = name => {
    this.setState({
      persons: [
        { name, age: 30 },
        { name: 'Ainvolt', age: 31 },
      ]
    })
  }

  changeName = event => {
    this.setState({
      persons: [
        { name: event.target.value, age: 30 },
        { name: 'Ainvolt', age: 31 },
      ]
    })
  }

  toggelPersonsHanler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  render() {
    const person = this.state.persons[0]
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        < Person
          name={person.name}
          age={person.age}
          atChange={this.changeName}
          click={() => this.switchName('Egorka')
          }> Some text</Person >
      )
    }
    return (
      <div className="App">
        <button onClick={this.toggelPersonsHanler}>switch</button>
        {persons}
      </div>
    );
  }
}

export default App;
