
/*
	Cleanup - declarative style, describing which of the methods, 
	I am using as part of the packages
 */

const { createElement } = React
const { render } = ReactDOM

const style = {
	backgroundColor: 'blue',
	fontSize: '40px',
	fontFamily: 'Arial',
	color: 'white',
	fontWeight: 'bold'
}

const greeting = createElement(
	'h1', 
	{className: 'header', id: 'greeting', style: style},
	'Hello World'
)

render(
	greeting, 
	document.getElementById('react-container')
)