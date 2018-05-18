export const calculateDaysInMonth = (month, year) => {
	return new Date(year, month+1, 0).getDate();
}


export const addDays = (date, days) => {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}