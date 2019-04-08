import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

const Footer = (props) => {

  return (
  <div className="App">
    <Navbar sticky="bottom" collapseOnSelect bg="dark" variant="dark">
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>&copy; 2019 // Barr Covrigaru</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
  )
}

export default Footer
