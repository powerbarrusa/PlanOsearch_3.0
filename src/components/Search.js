import React from 'react'

const Search = (props) => {

  return (
    <div className="container">
      <h1>
        Search
      </h1>
      {props.listings.map((listing, idx) => {
        return (
          <div key={idx}>
            <div className="card listing">
              <img className="card-img-top" src="..." alt="Card cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{listing.street}</li>
                <li className="list-group-item">{listing.city}</li>
                <li className="list-group-item">{listing.state}</li>
              </ul>
              <div className="card-body">
                <a href="/" className="card-link">Card link</a>
                <a href="/" className="card-link">Another link</a>
              </div>
            </div>
          </div>
          )
        })
      }
      <iframe title="iframe" floorwidth='533' src="https://planotours.planomatic.com/tour/187136/tourmini" height="415" width="553" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
    </div>
  )
}

export default Search