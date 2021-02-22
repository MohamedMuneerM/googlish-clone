import {React, useState} from 'react'
import {Container, Row, Col, Form, Button, FormControl } from 'react-bootstrap'
import "./GoogleSearchBar.css"


const GoogleSearchBar = () => {
	const [searchTerm, setSearchTerm] = useState("Search...")

	const updateValue = (e) => {
		setSearchTerm(e.target.value)
	}

	const sendQueryText = (e) => {
		e.preventDefault()
		// fetch('127.0.0.1:800/api/', {method:"POST"})
		// .then(response => console.log(response))
		// .catch(error => console.log(error))
		console.log('query send!! ' + searchTerm)
	}


	return (

		<Container>

			<Form onSubmit={sendQueryText}>
				<div style={{ "marginTop": "150px" }} className="wrapper mx-auto justify-content-center">
					<div className="d-flex justify-content-center my-4 "><img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="google-logo"/></div>
					

					<div className="searchbar d-flex flex-row justify-content align-items-center" >

						<span><i className="fa fa-search"></i></span>
						
						<FormControl onChange={updateValue} value={searchTerm} type="text" className="rounded-pill round-search input outline-0 border-0">

						</FormControl>

						{searchTerm ? <span><i className="fa fa-times align-self-end cross"></i></span> : ''}
					</div>
					
					<div className="d-flex justify-content-center my-4">
						<Button type="submit" size="md" variant="light">Google Search</Button>
						<Button className="ml-2" size="md" variant="light">I'm Feeling Lucky</Button>  
					</div>

				</div>
		      
		    </Form>
		 
		</Container>	
	)
}


export default GoogleSearchBar

// <div className="search-icon"><i className="fa fa-search rounded-pill"></i></div>