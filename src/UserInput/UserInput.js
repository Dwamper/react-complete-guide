import React from 'react';
const styles = {
  'margin-bottom': '30px',
  border: '2px solid #ccc'
}
const UserInput = ({ value, change }) => {
  return (<input style={styles} value={value} onChange={change} />)
}

export default UserInput;