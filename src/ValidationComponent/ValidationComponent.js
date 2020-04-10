import React from 'react';

const validationComponent = ({ length }) => {
  let warning = null
  if (length < 5) {
    warning = 'text too short'
  }
  if (length > 10) {
    warning = 'text too long'
  }
  return (
    <p>{warning}</p>
  )
}
export default validationComponent;
