'use strict';

/*
	Cleanup - declarative style, describing which of the methods, 
	I am using as part of the packages
 */

var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;


render(React.createElement(
	'h1',
	{
		id: 'greeting',
		className: 'header',
		style: {
			backgroundColor: 'black',
			fontSize: '30px',
			fontFamily: 'Verdana',
			color: 'white',
			fontWeight: 'light'
		} },
	'Hello World'
), document.getElementById('react-container'));
