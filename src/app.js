
/*
	Cleanup - declarative style, describing which of the methods, 
	I am using as part of the packages
 */

const React  = require('react')
const { render } = require('react-dom')

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