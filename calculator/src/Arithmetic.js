import React from 'react';
import {Link, useParams} from 'react-router-dom'

const Arithmetic = () => {
  const {operation, num1, num2} = useParams()
  const first = parseInt(num1)
  const second = parseInt(num2)
  if (operation === 'divide' && second === 0) return <h1>NEVER DIVIDE BY 0! I'M SO ANGRY NOW GRRRRRR</h1>
  let result;
  if (operation === 'add') {
    result = first + second
  } else if (operation === 'subtract') {
    result = first - second
  } else if (operation === 'multiply') {
    result = first * second
  } else if (operation === 'divide') {
    result = first / second
  }

  return (
    <div>
      <h1>The answer is {result}</h1>
      <Link to="/">Back to Calculator</Link>
    </div>
  )
}

export default Arithmetic;