import React from 'react';
import SingleMonth from '../Month/Month'
import * as MonthFactory from './MonthFactory'
import './RangeCalendar.css'
 
const RangeCalendar = (props) => {

	const renderCalendars = (totalDays, startDate) => {
		let calendars = MonthFactory.splitDaysByMonth(totalDays, startDate);
		return calendars.map((cal, index)=>{
			return (
				<SingleMonth 
					month={cal.month} 
					year={cal.year}
					start={cal.starting}
					end={cal.ending}
					key={index}/>
			)
			
		})
	}
	
	let view = <view/>

	if(props.startDate){
		view = (
			<div className="RangeCalendar">
				{renderCalendars(props.numberOfDays, props.startDate)}
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