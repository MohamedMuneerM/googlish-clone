import React from 'react';
import SearchBar from './SearchBar/SearchBar'
import SchdeluleList from './Schedule/ScheduleList'
import { Button } from '@material-ui/core';
import HideAppBar from './navbar/navbar.js'
import SimplePaper from './paperComponent/paperBg'

const App = () => {
	return (
		// <h1>hey</h1>
		<div>
			
			<HideAppBar/>
			<h5>Learn react</h5>
			<SearchBar/>
			<SchdeluleList/>
			<SimplePaper/>
			<p>lorem jagpegjhepgepgte
			etgqotpqotuq[utw[utqwt
			wqtwqptqptuqptuputt
			twtjtjqpwtuqw[tuqwt
			tqiwqptuqp[uq[wqtwqptqptuqptuputttqwtqpotqt
			tqwttttttttttttttttttttttt
			tttttttttttttttttttttttttt
			ttttttttttttttttttttttttttt
			tttttttttttttttttttttttttttttttttttttttttt

			ttttttttttttttttttttttttttttttttttttttttttt</p>
			<Button variant="contained" color="primary">Hello World</Button>
		</div>
		
	)
} 

export default App