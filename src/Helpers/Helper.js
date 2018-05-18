export const calculateDaysInMonth = (month, year) => {
	return new Date(year, month+1, 0).getDate();
}

export const addDays = (date, days) => {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];