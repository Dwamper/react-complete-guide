import React from 'react';
import './Task.css'
const task = ({ task: { name, description, id }, removeTask, changed }) => {
  return (
    <div className="dTask">
      <div className="dTask-title">{name}</div>
      <input value={description} onChange={changed} />
      <button onClick={removeTask}>remove</button>
    </div>
  )
}
export default task