import React from 'react'
import text from './titles.json'
import './stylesheets/hello.css'
import './stylesheets/goodbye.scss'

export const Hello = (
	<h1 id='heading-hello' className='header'>
		{text.hello}
	</h1>
)

export const Goodbye = (
	<h1 id='heading-goodbye' className='header'>
		{text.goodbye}
	</h1>
)