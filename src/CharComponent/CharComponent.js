import React from 'react';

const charComponent = ({ char, remove }) => {
  const style = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid black'
  }
  return (
    <span style={style} onClick={remove}>{char}</span>
  )
}

export default charComponent;
