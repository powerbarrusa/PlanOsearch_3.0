import React from 'react'
import StickyNav from './StickyNav'
import Footer from './Footer'
import { Card } from 'react-bootstrap'

const Plans = (props) => {

  return (
    <div className="App">
      <StickyNav />
      <h1 className="logo">
        Interactive Floor Plan
      </h1>
      {props.listings.map((listing, idx) => {
        return (
          <div className="iframe" key={idx}>
            <Card className="mb-3 ml-3">
              <Card.Body>
                <Card.Link href={listing.iframe}>Photos // Floor Plans</Card.Link>
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

export default Plans