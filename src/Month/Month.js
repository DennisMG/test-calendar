import React from 'react';

import './Month.css'
import DayComponent from '../Day/Day'
import * as Helper from '../Helpers/Helper';

const Month = (props) => {
	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	

	const renderDayLabels = () => {
		return days.map((day)=>{
			return (
				<div className="day-label">{day[0]}</div>
			);
		})
	}
	
	const renderCalendarNumbers = (month, year, start, end) => {
		let calendarNumbers = []

		let daysInMonth = Helper.calculateDaysInMonth(month, year);		
		
		let firstDayOfMonth = new Date(year, month)
		
		for(let invalidDate = 0; invalidDate < firstDayOfMonth.getDay(); invalidDate++){
			calendarNumbers.push(<DayComponent day={-1}/>)
		}

		for(let hiddenDate = 1; hiddenDate < start; hiddenDate++){
			calendarNumbers.push(<DayComponent day={-1}/>)
		}
		
		let _day = start;
		while( _day <= daysInMonth){
			calendarNumbers.push(<DayComponent day={_day}/>)
			_day++;
		}

		return calendarNumbers
	}

	return(
		<div className="Month">
			<div className="days-header">
				{ renderDayLabels() }
			</div>
			<div className="month-name">
				{ months[props.month]} {props.year}
			</div>
			<div className="calendar-days-container">
				{renderCalendarNumbers(props.month, props.year, props.start, props.end)}
			</div>
		</div>
	) 
}

export default Month;