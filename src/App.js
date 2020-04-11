import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
import './App.css';
import Task from './Components/Task/Task'

class App extends Component {
  state = {
    tasks: [
      { id: 1, name: 'Leart React', description: 'Learn basics' },
      { id: 2, name: 'Leart React 2', description: 'Learn conditions' },
      { id: 3, name: 'Leart React 3', description: 'Learn lists' },
    ],
    showTasks: false,
  }

  removeTask = (id) => {
    const tasks = [...this.state.tasks].filter(t => t.id !== id);
    this.setState({ tasks })
  }

  taskChanged = (event, id) => {
    const tasks = [...this.state.tasks]
    const taskIndex = tasks.findIndex(t => t.id === id);
    const task = {
      ...tasks[taskIndex],
      description: event.target.value,
    }
    tasks[taskIndex] = task;
    this.setState({ tasks })
  }

  render() {
    let tasks = null
    if (this.state.showTasks && this.state.tasks && this.state.tasks.length > 0) {
      tasks = this.state.tasks.map(item => (
        <Task
          key={item.id}
          task={item}
          removeTask={() => this.removeTask(item.id)}
          changed={event => this.taskChanged(event, item.id)}
        />
      ))
    }

    const btnStyle = {
      borderColor: this.state.showTasks ? 'green' : 'red',
      marginBottom: '24px',
      padding: '0.8em',
    }

    btnStyle[':hover'] = {
      backgroundColor: 'salmon'
    }

    let headerClasses = ['App-title']

    if (this.state.tasks.length <= 2) {
      headerClasses.push('bold')
    }

    if (this.state.tasks.length <= 1) {
      headerClasses.push('red')
    }

    headerClasses = headerClasses.join(' ')

    return (
      <StyleRoot>
        <div className="App">
          <h1 className={headerClasses}>Tasks</h1>
          <button
            style={btnStyle}
            onClick={() => { this.setState({ showTasks: !this.state.showTasks }) }}>toggle</button>
          {tasks}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
