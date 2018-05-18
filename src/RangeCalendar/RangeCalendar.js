import React from 'react';
import SingleMonth from '../Month/Month'
import * as Helper from '../Helpers/Helper';

import './RangeCalendar.css'
 
const RangeCalendar = (props) => {

	let daysCount = props.numberOfDays;

	

	return(
		<div>
			{
		props.startDate ? 
		<div className="RangeCalendar">
			<SingleMonth 
				month={props.startDate.getMonth()} 
				year={props.startDate.getFullYear()}
				start={props.startDate.getDate()}
				end={14}/>
		</div>
		:
		<div/>
	}
		</div>
	
		
	) 
}

export default RangeCalendar;