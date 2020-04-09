import React from 'react';
import './UserOutput.css'

const UserInput = ({ title, body }) => {
  return (
    <div className="dUserOutput">
      <p>{title}</p>
      <p>{body}</p>
    </div>
  )
}

export default UserInput;