import React from 'react';
import SingleMonth from '../Month/Month'

import './RangeCalendar.css'
 
const RangeCalendar = (props) => {

	var daysCount = props.numberOfDays;



	return(
		<div className="RangeCalendar">
			<SingleMonth month={0} year={2018}/>
		</div>
	) 
}

export default RangeCalendar;