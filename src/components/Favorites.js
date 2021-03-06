import React from 'react'
import StickyNav from './StickyNav.js'
import Footer from './Footer'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Favorites = (props) => {

  return (
    <div className="App">
      <StickyNav />
      <h1 className="headers">
        Favorites
      </h1>
      {props.favorites.map((favorite, idx) => {
        return (
          <div className="favorites" key={idx}>
            <Card className="mb-3 ml-3" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={favorite.thumbnail} />
              <Card.Body>
                <Card.Title>{favorite.street}, {favorite.city}, {favorite.state}, {favorite.zip}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>{favorite.beds_baths} - beds / baths</ListGroupItem>
                <ListGroupItem>{favorite.sqft} sqft || {favorite.price}</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Link to="/plan" className="iframe spacey">Photos // Floor Plans</Link>
                <Card.Link>
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

export default Favorites