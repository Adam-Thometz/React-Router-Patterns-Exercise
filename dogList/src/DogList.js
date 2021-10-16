import React from "react";
import { Link } from "react-router-dom";

const DogList = ({dogs}) => {
  console.log(dogs)
  return (
    <div>
      <h1>Pick a dog!</h1>
      {dogs.map(d => (
        <div>
          <h3>
            <Link to={`/dogs/${d.name.toLowerCase()}`}>Check out {d.name}</Link>
          </h3>
          <img src={d.src} alt={d.name} />    
        </div>
      ))}
    </div>
  )
}

export default DogList