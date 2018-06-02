
/*
	Cleanup - declarative style, describing which of the methods, 
	I am using as part of the packages
 */

const { createElement } = React
const { render } = ReactDOM

const greeting = createElement(
	'h1', 
	{className: 'header', id: 'greeting', style: {backgroundColor:'red', fontSize:'80px'}},
	'Hello World'
)

render(
	greeting, 
	document.getElementById('react-container')
)