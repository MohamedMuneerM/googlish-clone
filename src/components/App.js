import React from 'react';
import NavBar from './navbar/navbar'
import GoogleSearchBar from './GoogleSearchBar/GoogleSearchBar'
import './App.css'
import Footer from './Footer/Footer'
const App = () => {
	return (
		// <h1>hey</h1>
		<div>
			<div className="main">
				<NavBar/>
				<GoogleSearchBar/>
			</div>
			
			<Footer/>
		</div>
		
	)
} 

export default App