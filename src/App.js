import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Dwamper', age: 30 },
      { name: 'Ainvolt', age: 31 },
    ]
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

  render() {
    const person = this.state.persons[0]
    return (
      <div className="App">
        <Person
          name={person.name}
          age={person.age}
          atChange={this.changeName}
          click={() => this.switchName('Egorka')}>Some text</Person>
      </div>
    );
  }
}

export default App;
