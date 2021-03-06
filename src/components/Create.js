import React from 'react'
import { Link } from 'react-router-dom'

const Create = (props) => {

  return (
  <div className="App">
    <h1 className="headers row justify-content-center">
      Create an Account
    </h1>
    <form>
      <div className="form-group">
        <label htmlFor="current-email"></label>
        <input defaultValue="" type="email" className="form-control w-50 mx-auto" id="current-email" aria-describedby="emailHelp" placeholder="Email" />
        <small id="emailHelp" className="form-text text-muted"></small>
      </div>
      __________________________
      <div className="form-group">
        <label htmlFor="current-password"></label>
        <input defaultValue="" type="password" className="form-control w-50 mx-auto" id="same-password" placeholder="Password" />
        <label htmlFor="current-password"></label>
        <input defaultValue="" type="password" className="form-control w-50 mx-auto" id="same-password" placeholder="Re-Enter Password" />
      </div>
    </form>
    <Link to="/login"><button type="button" className="login btn btn-primary btn-lg">Submit</button></Link>
  </div>
  )
}

export default Create