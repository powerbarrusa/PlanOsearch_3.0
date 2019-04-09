import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'

const Suggestions = (props) => {
  const options = props.results.map(result => (
    <div className="search App" key={result.id}>
      <Card className="mb-3 ml-3" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={result.thumbnail} />
        <Card.Body>
          <Card.Title>{result.street}, {result.city}, {result.state}, {result.zip}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{result.beds_baths} - beds / baths</ListGroupItem>
          <ListGroupItem>{result.sqft} sqft || {result.price}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link className="iframe" href={result.iframe}>Photos // Floor Plans</Card.Link>
          <Card.Link >
            <i onClick={() => props.hearted()} className={props.heart ? "fas fa-heart" : "far fa-heart"}></i>
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  ))
  return <div>{options}</div>
}

export default Suggestions