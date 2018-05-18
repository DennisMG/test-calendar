import React from 'react';
import SingleMonth from '../Month/Month'
import * as Helper from '../Helpers/Helper';

import './RangeCalendar.css'
 
const RangeCalendar = (props) => {

	let daysCount = props.numberOfDays;

	const monthDifference = (date1, date2) => {
	    var year1 = date1.getFullYear();
		var year2 = date2.getFullYear();
		var month1 = date1.getMonth();
		var month2 = date2.getMonth();
		if(month1 === 0){ 
		  month1++;
		  month2++;
		}
		var numberOfMonths = (year2 - year1) * 12 + (month2 - month1) - 1;
		return numberOfMonths + 1;
	}

	let splitDaysByMonth = (totalDays, startDate) => {
		let startingMonth = startDate.getMonth()
		let startingDate = props.startDate.getDate()
		let endDate = Helper.addDays(startDate, totalDays-1);
		let diff = monthDifference(startDate, endDate) 
		let currentYear;
		
		let calendarArray = [{
			month: startingMonth,
			year: startDate.getFullYear(),
			starting: startingDate,
	 		ending: startingDate + totalDays
		}]

		for(let i = 1; i <= diff ; i++){
			let monthMeta;
			if(i === diff){
				monthMeta = {
					month: endDate.getMonth(),
					year: endDate.getFullYear(),
					starting: 1,
					ending: endDate.getDate() + 1
				}
			}else{
				currentYear = startDate.getFullYear()
				console.log("month: ", startDate.getMonth())
				if(startDate.getMonth() >= 11)
					currentYear++;
				monthMeta = {
					month: startingMonth + i,
					year: currentYear,
					starting: 1,
					ending: Helper.calculateDaysInMonth( i + startingMonth, currentYear) + 1
				}

			}

			calendarArray.push(monthMeta);
			
		}
	console.log(calendarArray)
		return calendarArray;

	}

	let renderCalendars = (totalDays, startDate) => {
		let calendars = splitDaysByMonth(totalDays, startDate);
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