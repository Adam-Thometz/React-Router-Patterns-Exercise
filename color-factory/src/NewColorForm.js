import React, {useState} from "react";
import { Link, Redirect } from "react-router-dom";

const NewColorForm = () => {
  const init = {
    name: "",
    color: ""
  }

  const [formData, setFormData] = useState(init)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => {
    const {name, value} = e.target
    setFormData(data => ({
      ...data,
      [name]: value
    }))
  }

  const toggleSubmitButton = () => {
    // If everything in the form is filled out, set disabled attribute on submit button to false
    if (Object.values(formData).every(data => data !== '')) {
      return false
    } else {
      return true
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    const {name, color} = formData
    localStorage.setItem(name, color)
    setSubmitted(true)
  }

  return (
    <form className="NewColorForm">
      <label htmlFor="name">Color Name: </label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <label htmlFor="color">Color Value: </label>
      <input
        type="color"
        id="color"
        name="color"
        value={formData.color}
        onChange={handleChange}
      />
      <button disabled={toggleSubmitButton()} onClick={handleSubmit}>Add color!</button>
      <Link to="/colors">Go back</Link>
      {submitted ? <Redirect to="/colors" /> : null}
    </form>
  )
}

export default NewColorForm