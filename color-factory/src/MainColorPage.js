import React from "react";
import {Link} from 'react-router-dom'

const MainColorPage = () => {
  const colors = Object.keys(localStorage).reverse()
  return (
    <div className="MainColorPage">
      <div className="MainColorPage-header">
        <h1>Welcome to the Color Factory!</h1>
        <h3><Link to='/colors/new'>Add a color</Link></h3>
      </div>
      <div className="MainColorPage-body">
        <p>Please select a color</p>
        {colors.length ? 
          colors.map(c => (
            <p><Link to={`/colors/${c}`} >{c}</Link></p>
          )) :
          <small>You haven't picked any colors yet. Please click <Link to="/colors/new">here</Link> to add colors!</small>}
      </div>
    </div>
  )
}

export default MainColorPage