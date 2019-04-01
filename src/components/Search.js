import React from 'react'

const Search = (props) => {

  return (
    <div className="container">
      <h1>
        Search
      </h1>
      {props.listings.map((listing, idx) => {
        return (
          <div>
            {listing.state}
            <div className="d-none">
              key={idx}
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