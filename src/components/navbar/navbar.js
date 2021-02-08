import React from 'react';

import { Navbar, Nav, Container, Row, NavDropdown } from 'react-bootstrap'

const NavBar = () =>{
  return (
    <div>
        <Navbar expand="lg" variant="light" bg="white">
          <Navbar.Brand href="#">Google</Navbar.Brand>
          <div className="d-flex ">
            <Nav.Link  href="/gmail">Gmail</Nav.Link>
            <Nav.Link  href="/images">Images</Nav.Link>
          </div>
          
        </Navbar>
    </div>

    )

}

export default NavBar



