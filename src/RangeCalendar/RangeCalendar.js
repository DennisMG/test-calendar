import React from 'react';
import SingleMonth from '../Month/Month'
import * as Helper from '../Helpers/Helper';

import './RangeCalendar.css'
 
const RangeCalendar = (props) => {

	let daysCount = props.numberOfDays;

	function monthDifference(date1, date2) {
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
		let secondDate = Helper.addDays(startDate, totalDays-1);
		let diff = monthDifference(startDate, secondDate) 
		
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
					month: secondDate.getMonth(),
					year: secondDate.getFullYear(),
					starting: 1,
					ending: secondDate.getDate() + 1
				}
			}else{
				monthMeta = {
					month: startingMonth + i,
					year: startDate.getFullYear(),
					starting: 1,
					ending: Helper.calculateDaysInMonth( i + startingMonth, startDate.getFullYear()) + 1
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
				{/*<SingleMonth 
							        month={props.startDate.getMonth()} 
							        year={props.startDate.getFullYear()}
							        start={props.startDate.getDate()}
							        end={props.numberOfDays}/>*/}
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