import React from 'react'
import StickyNav from './StickyNav'
import Footer from './Footer'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'

const Suggestions = (props) => {
  const options = props.results.map(r => (
    <div className="search" key={r.id}>
    <StickyNav />
      <Card className="mb-3 ml-3" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={r.thumbnail} />
        <Card.Body>
          <Card.Title>{r.street}, {r.city}, {r.state}, {r.zip}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{r.beds_baths} - beds / baths</ListGroupItem>
          <ListGroupItem>{r.sqft} sqft || {r.price}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href={r.iframe}>Photos // Floor Plans</Card.Link>
          <Card.Link href="#">
            <i onClick={props.onFavorite} id={r.id} className="far fa-heart"></i>
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  ))
  return <div>{options}</div>
}

export default Suggestions