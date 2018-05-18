import React from 'react';
import SingleMonth from '../Month/Month'
import * as Helper from '../Helpers/Helper';

import './RangeCalendar.css'
 
const RangeCalendar = (props) => {

	let daysCount = props.numberOfDays;

	let view = <view/>

	if(props.startDate){
		view = (
			<div className="RangeCalendar">
				<SingleMonth 
					month={props.startDate.getMonth()} 
					year={props.startDate.getFullYear()}
					start={props.startDate.getDate()}
					end={props.numberOfDays}/>
			</div>
		)

	}
	return(
		<div>
			{ view }
		</div>
	
		
	) 
}

export default RangeCalendar;