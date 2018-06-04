import React from 'react'
import '../stylesheets/ui.scss'

const SkiDayCount = React.createClass({
	render() {
		return (
			<div className='ski-day-count'>
				<div className='total-days'><span>8 days</span></div>
				<div className='powder-days'><span>3 days</span></div>
				<div className='backcountry-days'><span>1 hiking day</span></div>
			</div>
		)
	}
})

export default SkiDayCount