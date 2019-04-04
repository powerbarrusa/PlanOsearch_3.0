import React from 'react'
import StickyNav from './StickyNav'
import Footer from './Footer'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'

const Search = (props) => {

  return (
    <div className="App">
      <StickyNav />
      <h1 className="logo">
        Search
      </h1>
      {props.listings.map((listing, idx) => {
        return (
          <div className="search">
            <Card className="mb-3 ml-3" key={idx} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={listing.thumbnail} />
              <Card.Body>
                <Card.Title>{listing.street}, {listing.city}, {listing.state}, {listing.zip}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>{listing.beds_baths} - beds / baths</ListGroupItem>
                <ListGroupItem>{listing.sqft} sqft || {listing.price}</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Photos // Floor Plans</Card.Link>
                <Card.Link href="#">
                  <i className="far fa-heart"></i>
                  <i className="fas fa-heart"></i>
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
          )
        })
      }
      <Footer />
    </div>
  )
}

export default Search