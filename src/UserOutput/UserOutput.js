import React from 'react';
import './UserOutput.css'

const userInput = ({ title, body }) => {
  return (
    <div className="dUserOutput">
      <p>{title}</p>
      <p>{body}</p>
    </div>
  )
}

export default userInput;