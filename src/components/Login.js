import React from 'react'

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
        <input type="email" className="form-control w-50 mx-auto" id="current-email" aria-describedby="emailHelp" placeholder="Email" />
        <small id="emailHelp" className="form-text text-muted"></small>
      </div>
      <div className="form-group">
        <label htmlFor="current-password"></label>
        <input type="password" className="form-control w-50 mx-auto" id="current-password" placeholder="Password" />
      </div>
      <button onClick={() => props.login()} type="button" className="login btn btn-primary btn-lg">Login</button>
    </form>
  </div>
  )
}

export default Login