
/*
	Cleanup - declarative style, describing which of the methods, 
	I am using as part of the packages
 */

import React  from 'react'
import { render } from 'react-dom'

render(
	<h1
		id='greeting'
		className='header'
		style={
			{
				backgroundColor: 'black',
				fontSize: '30px',
				fontFamily: 'Verdana',
				color: 'white',
				fontWeight: 'light'
			} 
	}>
	Hello Universe
	</h1>,

	document.getElementById('react-container')
)