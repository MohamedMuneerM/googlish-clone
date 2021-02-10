import React from 'react';

import { Navbar, Nav, Container, Row, NavDropdown } from 'react-bootstrap'

const NavBar = () =>{
  return (
    <div>
        <Navbar expand="xl" variant="light" bg="white">
          <Navbar.Brand href="#"></Navbar.Brand>
          <div className="d-flex bd-highlight" >
            <Nav.Link className="text-dark" href="#gmail">Gmail</Nav.Link>
            <Nav.Link className="text-dark" href="#images">Images</Nav.Link>
          </div>
          
        </Navbar>
    </div>

    )

}

export default NavBar



