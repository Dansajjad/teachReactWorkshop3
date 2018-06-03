/*
	Cleanup - declarative style, describing which of the methods, 
	I am using as part of the packages
 */

import React  from 'react'
import { render } from 'react-dom'
import { Hello, Goodbye } from './lib'

render(
	<div>
	{ Hello }
	{ Goodbye }
	</div>,
	document.getElementById('react-container')
)