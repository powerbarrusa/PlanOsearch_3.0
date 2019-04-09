import React from 'react'
import StickyNav from './StickyNav'
import { Card } from 'react-bootstrap'

const Plans = (props) => {

  return (
    <div className="App">
      <StickyNav />
      <div className="plan">
        <Card>
          <Card.Body>
            <iframe title="iframe" floorwidth='840' src='https://planotours.planomatic.com/tour/178885/tourmini' thumbnail='https://photoplan-cache.cdn.planomatic.com/tourFiles/178885/photocache/5423490-300wh.jpg' height="600" width="800" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default Plans