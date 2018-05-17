import React from 'react';

import './Month.css'

const Month = (props) => {
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	
	var printDayLabels = () => {
		return days.map((day)=>{
			return (
				<div className="day-label">{day[0]}</div>
			);
		})
	}

	return(
		<div className="Month">
			<div className="days-header">
				{ printDayLabels() }
			</div>
			<div className="month-name">
				{ months[props.month]} {props.year}
			</div>

		</div>
	) 
}

export default Month;