const greeting = React.createElement(
	'h1', 
	{className: 'header', id: 'greeting', style: {backgroundColor:'red', fontSize:'80px'}},
	'Hello World'
)

ReactDOM.render(
	greeting, 
	document.getElementById('react-container')
)