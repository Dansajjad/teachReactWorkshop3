import React from 'react'
import text from './titles.json'

export const Hello = (
	<h1 
		id='title'
		className='header'
		style={{backgroundColor: 'grey', color:'white'}}>
		{text.hello}
	</h1>
)

export const Goodbye = (
	<h1
	id='title'
	className='header'
	style={{backgroundColor:'blue', color:'red'}}>
	{text.goodbye}
	</h1>
)