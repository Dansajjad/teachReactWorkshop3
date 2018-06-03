
/*
	Cleanup - declarative style, describing which of the methods, 
	I am using as part of the packages
 */

const { render } = ReactDOM

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
	Hello World
	</h1>,

	document.getElementById('react-container')
)