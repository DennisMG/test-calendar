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
	
	const renderCalendarNumbers = (month, year) => {
		let calendarNumbers = []
		let daysInMonth = Helper.calculateDaysInMonth(month, year);

		let _day = 1;
		while( _day <= daysInMonth){
			if(days[_day] ===  days[props.startDate.getDate()]){
				calendarNumbers.push(<DayComponent day={-1}/>)
				console.log("print")
				continue;
			}
			calendarNumbers.push(<DayComponent day={_day}/>)
			_day++;
		}

		for (let i = 1; i <= daysInMonth; i++) {
			
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
				{renderCalendarNumbers(props.month, props.year)}
			</div>
		</div>
	) 
}

export default Month;