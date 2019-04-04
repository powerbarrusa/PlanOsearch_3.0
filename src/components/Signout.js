import React from 'react'
import { Link } from 'react-router-dom'

const Signout = (props) => {

  return (
  <div className="App">
    <h1 className="logo row justify-content-center">
      You've been signed out!
    </h1>
    <Link to="/login"><button type="button" className="login btn btn-primary btn-lg">Log back in!</button></Link>
  </div>
  )
}

export default Signout