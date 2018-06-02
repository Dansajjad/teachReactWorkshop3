
/*
	Cleanup - declarative style, describing which of the methods, 
	I am using as part of the packages
 */

const { render } = ReactDOM

const style = {
	backgroundColor: 'blue',
	fontSize: '40px',
	fontFamily: 'Arial',
	color: 'white',
	fontWeight: 'bold'
}

render(
	<h1 
		id='greeting'
		className='header'
		style={style}>
	Hello World	
	</h1>,

	document.getElementById('react-container')
)