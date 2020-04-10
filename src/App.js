import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'

class App extends Component {

  state = {
    inputValue: '',
  }

  inputChange = event => {
    this.setState({ inputValue: event.target.value })
  }

  removeChar = index => {
    const inputValue = this.state.inputValue.split('');
    inputValue.splice(index, 1)
    this.setState({ inputValue: inputValue.join('') })
  }

  render() {
    const { inputValue } = this.state;
    const chars = inputValue.split('').map((c, index) => {
      return (
        <CharComponent char={c} key={index} remove={() => { this.removeChar(index) }} />
      )
    })
    return (
      <div className="App">
        <input value={inputValue} onChange={this.inputChange} />
        <p>{inputValue.length} </p>
        <ValidationComponent length={inputValue.length} />
        <p>{chars}</p>
      </div>
    );
  }
}

export default App;
