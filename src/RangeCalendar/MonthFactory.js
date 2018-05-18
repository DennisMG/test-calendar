import * as Helper from '../Helpers/Helper';

export const monthDifference = (date1, date2) => {
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

export const splitDaysByMonth = (totalDays, startDate) => {
	let startingMonth = startDate.getMonth()
	let startingDate = startDate.getDate()
	let endDate = Helper.addDays(startDate, totalDays-1);
	let diff = monthDifference(startDate, endDate) 
	let currentYear = startDate.getFullYear();
	let currentMonthCounter = startingMonth;
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

			if(currentMonthCounter >= 11)
				currentYear++;
			
			if(currentMonthCounter < 11){
				currentMonthCounter ++;
			}else{
				currentMonthCounter = 0
			}

			monthMeta = {
				month: currentMonthCounter,
				year: currentYear,
				starting: 1,
				ending: Helper.calculateDaysInMonth( currentMonthCounter, currentYear) + 1
			}

		}

		calendarArray.push(monthMeta);
		
	}
	return calendarArray;

}