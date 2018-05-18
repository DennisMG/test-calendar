import React from 'react';

import './Day.css'

const day = (props) => {
	return(
		!props.hidden ?
		<div className="date">
			{props.day}
		</div>
		:
		<div className="hidden-date"></div>
	) 
}

export default day;