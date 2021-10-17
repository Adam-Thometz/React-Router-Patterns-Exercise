import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Calculator = () => {
  const init = {
    num1: 0,
    num2: 0,
    operation: ""
  }
  const [data, setData] = useState(init)
  const history = useHistory()

  const toggleSubmit = () => {
    if (data.operation !== "") {
      return false
    } else {
      return true
    }
  }

  const handleChange = e => {
    const {name, value} = e.target
    setData(data => ({
      ...data,
      [name]: value
    }))
    toggleSubmit()
  }

  const handleSubmit = e => {
    e.preventDefault()
    const {num1, num2, operation} = data
    setData(init)
    history.push(`/${operation}/${num1}/${num2}`)
    // return <Redirect to={`${operation}/${num1}/${num2}`} />
  }

  return (
    <form>
      <h1>Calculator</h1>
      <label htmlFor="num1">First number: </label>
      <input
        type="number"
        id="num1"
        name="num1"
        value={data.num1}
        onChange={handleChange}
      />
      <label htmlFor="operation">Operation: </label>
      <select id="operation" name="operation" value={data.operation} onChange={handleChange}>
        <option value="">Select an operation</option>
        <option value="add">Addition (+)</option>
        <option value="subtract">Subtraction (-)</option>
        <option value="multiply">Multiplication (X)</option>
        <option value="divide">Division (/)</option>
      </select>
      <label htmlFor="num2">Second number: </label>
      <input
        type="number"
        id="num2"
        name="num2"
        value={data.num2}
        onChange={handleChange}
      />
      <button disabled={toggleSubmit()} onClick={handleSubmit}>Calculate!</button>
    </form>
  )
}

export default Calculator;