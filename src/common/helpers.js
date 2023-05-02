//Функции для календаря
export const formatingCurrentDate = (date) => {
  const ruFormatDate = date.toLocaleString('ru', {month: 'long', year: 'numeric'});
  const firstletter = ruFormatDate.slice(0, 1).toUpperCase();
  const substring = ruFormatDate.slice(1, -2);
  const result = firstletter + substring;

  return result;
}

export const getNumberOfDaysInMonth = (date) => {
  const result = 32 - new Date(date.getFullYear(), date.getMonth(), 32).getDate();
  
  return result;
}

export const getStartWeekday = (date) => {
  const dayIndex = date.getDay();
  const index = dayIndex === 0 ? 6 : (dayIndex - 1);
  
  return index + 1;
}

getStartWeekday(new Date())