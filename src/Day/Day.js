import React from 'react';

import './Day.css'

const day = (props) => {
	
	
	let weekendClass = '';
	if(props.letter === 'S') weekendClass = 'weekend';
	
	let day = (
		<div className={'date' + ' ' + weekendClass}>
			{props.day}
		</div>)

	if(props.hidden){
		day = <div className="hidden-date"/>
	}


	return day
}

export default day;