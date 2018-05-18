import React from 'react';

import './Month.css'
import DayComponent from '../Day/Day'
import * as Helper from '../Helpers/Helper';

const Month = (props) => {
	const months = Helper.months
	const days = Helper.days
	

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
		
		let firstDayOfMonth = new Date(year, month).getDay()
		
		for(let invalidDate = 0; invalidDate < firstDayOfMonth; invalidDate++){
			calendarNumbers.push(<DayComponent hidden={true}/>)
		}

		for(let hiddenDateBefore = 1; hiddenDateBefore < start; hiddenDateBefore++){
			calendarNumbers.push(<DayComponent hidden={true}/>)
		}
		
		let _day = start;
		while( _day < end){
			if(_day > daysInMonth) break;
			var weekday = new Date(year,month,_day).getDay()
			calendarNumbers.push(<DayComponent day={_day} letter={days[weekday][0]}/>)
			_day++;
		}

		for(let hiddenDateAfter = end; hiddenDateAfter < daysInMonth; hiddenDateAfter++){

			calendarNumbers.push(<DayComponent hidden={true}/>)
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