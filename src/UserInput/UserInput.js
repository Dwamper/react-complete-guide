import React from 'react';
const styles = {
  'margin-bottom': '30px',
  border: '2px solid #ccc'
}
const userInput = ({ value, change }) => {
  return (<input style={styles} value={value} onChange={change} />)
}

export default userInput;