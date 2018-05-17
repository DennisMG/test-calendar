import React from 'react';

import './Day.css'

const day = (props) => {
	return(
		<div className="Day">
			{props.day}
		</div>
	) 
}

export default day;