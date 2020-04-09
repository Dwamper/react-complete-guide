import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    users: [
      { title: 'Mike', body: 'first user' },
      { title: 'John', body: 'second body' },
    ]
  }

  inputHandler = (event) => {
    this.setState({
      users: [
        { title: event.target.value, body: 'first user' },
        { title: 'John', body: 'second body' },
      ]
    })
  }

  render() {
    const { users } = this.state
    return (
      <div className="App">
        <UserInput change={this.inputHandler} value={users[0].title} />
        <UserOutput title={users[0].title} body={users[0].body} />
        <UserOutput title={users[1].title} body={users[1].body} />
      </div>
    );
  }
}

export default App;
