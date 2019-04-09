import React from 'react'
import { Link } from 'react-router-dom'

const Login = (props) => {

  return (
  <div className="App">
    <div className="spacer"></div>
    <h1 className="logo">
      PlanOsearch
    </h1>
    <h4 className="mantra">
      for every home search
    </h4>
    <form>
    <div className="spacer"></div>
      <div className="form-group">
        <label htmlFor="current-email"></label>
        <input defaultValue="" type="email" className="loginfield form-control w-50 mx-auto " id="current-email" aria-describedby="emailHelp" placeholder="Email" />
        <small id="emailHelp" className="form-text text-muted"></small>
      </div>
      <div className="form-group">
        <label htmlFor="current-password"></label>
        <input defaultValue="" type="password" className="loginfield form-control w-50 mx-auto" id="enter-password" placeholder="Password" />
      </div>
      <button onClick={() => props.login()} type="button" className="login btn btn-primary btn-lg">LOGIN</button>
      <div className="column">
        <Link className="createuser" to="/createuser">Need an account? Create one!</Link>
      </div>
    </form>
  </div>
  )
}

export default Login