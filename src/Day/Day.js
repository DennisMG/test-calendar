import React from 'react';

import './Day.css'

const day = (props) => {
	return(
		props.day !== -1 ?
		<div className="date">
			{props.day}
		</div>
		:
		<div className="hidden-date"></div>
	) 
}

export default day;