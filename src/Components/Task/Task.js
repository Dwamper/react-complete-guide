import React from 'react'
import Radium from 'radium'
import './Task.css'
const task = ({task: {name, description, id}, removeTask, changed}) => {
	const style = {
		'@media (min-width: 500px)': {
			backgroundColor: 'pink',
		},
	}
	return (
		<div className="dTask" style={style}>
			<div className="dTask-title">{name}</div>
			<input value={description} onChange={changed} />
			<button onClick={removeTask}>remove</button>
		</div>
	)
}
export default Radium(task)
