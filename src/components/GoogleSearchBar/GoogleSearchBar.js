import React from 'react'
import {Container, Row, Col, Form, Button, FormControl } from 'react-bootstrap'
import "./GoogleSearchBar.css"


const GoogleSearchBar = () => {
	return (

		<Container>

			<Form>
				<div style={{ "marginTop": "150px" }}>
					<div className="d-flex justify-content-center my-4 "><img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="google-logo"/></div>
					
					<div className="searchbar d-flex justify-content-center mx-auto">
						
						<FormControl type="text" className="rounded-pill round-search">

						</FormControl>
					</div>
					
					<div className="d-flex justify-content-center my-4">
						<Button size="lg" variant="light">Google Search</Button>
						<Button className="ml-2" size="lg" variant="light">I'm Feeling Lucky</Button>  
					</div>

				</div>
		      
		    </Form>
		 
		</Container>	
	)
}


export default GoogleSearchBar

// <div className="search-icon"><i className="fa fa-search rounded-pill"></i></div>