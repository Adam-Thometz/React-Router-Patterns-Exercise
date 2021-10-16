import React from "react";
import { NavLink } from "react-router-dom";

const Nav = ({dogs}) => {
  const dogNames = dogs.map(d => d.name)
  return (
    <nav className="Nav">
      <NavLink to="/dogs">Home </NavLink>
      {dogNames.map(n => (
        <NavLink to={`/dogs/${n}`}>{n} </NavLink>
      ))}
    </nav>
  )
}

export default Nav