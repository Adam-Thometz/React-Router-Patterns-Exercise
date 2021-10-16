import React from "react";
import { Link, Redirect } from "react-router-dom";

const DogDetails = ({dog}) => {
  if (!dog) return <Redirect to="/dogs" />
  
  return (
    <div className="DogDetails">
      <h1>Meet {dog.name}!</h1>
      <img src={dog.src} alt={dog.name} />
      <p>{dog.name} is {dog.age} years old! Here are some facts about {dog.name}</p>
      <ul>
        {dog.facts.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
      <Link to="/dogs">Go Back</Link>
    </div>
  )
}

export default DogDetails