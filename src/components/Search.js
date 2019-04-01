import React from 'react'

const Search = (props) => {

  return (
    <div className="App">
      <h1 className="logo">
        Search
      </h1>
      {props.listings.map((listing, idx) => {
        return (
          <div className="row justify-content-around mb-3" key={idx}>
            <div className="card listing">
              <img className="card-img-top" src="..." alt="" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{listing.street}, {listing.city}, {listing.state}, {listing.zip}</li>
                <li className="list-group-item">{listing.beds_baths} - beds / baths</li>
                <li className="list-group-item">{listing.sqft} sqft || {listing.price}</li>
              </ul>
              <div className="card-body">
                <a href="/" className="card-link">iFrame</a>
                <a href="/" className="card-link">
                  <i class="far fa-heart"></i>
                  <i class="fas fa-heart"></i>
                </a>
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