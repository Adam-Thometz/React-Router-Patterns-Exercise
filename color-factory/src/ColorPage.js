import React from "react";
import { useParams } from "react-router";
import { Link, Redirect } from "react-router-dom";

const ColorPage = () => {
  const {color} = useParams()
  const colorHex = localStorage.getItem(color)
  if (!colorHex) return <Redirect to="/colors" />
  return (
    <div className="ColorPage" style={{backgroundColor: colorHex}}>
      <div className="ColorPage-innertext">
        <h1>This color is {color}</h1>
        <h3>Isn't it beautiful????? :)))</h3>
        <h5><Link to="/colors">Get out of here</Link></h5>
      </div>
    </div>
  )
}

export default ColorPage