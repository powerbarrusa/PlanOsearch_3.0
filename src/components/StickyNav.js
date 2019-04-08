import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

const StickyNav = (props) => {

  return (
  <div className="App">
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand className="nav-logo" href="http://localhost:3000/autocomplete">PlanOsearch</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="http://localhost:3000/autocomplete">Search</Nav.Link>
          <Nav.Link href="http://localhost:3000/favorites">Favorites</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="http://localhost:3000/signout">Sign Out</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
  )
}

export default StickyNav