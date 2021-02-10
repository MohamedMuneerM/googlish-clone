import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

const Footer = () => {
	return (

	<footer>
	    <Navbar expand="xl" className="" variant="light" bg="gray">
	      <Navbar.Brand href="#"></Navbar.Brand>
	      <div className="bd-highlight d-flex justify-content-between" >
	        <Nav.Link className="text-dark align-self-start" href="#ad">About</Nav.Link>
	        <Nav.Link className="text-dark align-self-start" href="#policy">Advertising</Nav.Link>
	        <Nav.Link className="text-dark align-self-end" href="#ad">Business</Nav.Link>
	        <Nav.Link className="text-dark align-self-end" href="#policy">How Search Works</Nav.Link>
	      </div>

	      
	    </Navbar>
    </footer>

	)
}

export default Footer











