import React from 'react';

const person = ({ name, age, children, click, atChange }) => {
  return (
    <div onClick={click}>
      <p>I'm a {name} and I am {age} years old!</p>
      <p>I say: {children}</p>
      <input onChange={atChange} value={name} />
    </div>
  )
}

export default person;
