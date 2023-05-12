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

export const getWeekdayIndex = (date) => {
  const dayIndex = date.getDay();
  const index = dayIndex === 0 ? 6 : (dayIndex - 1);
  
  return index + 1;
}

export const getStartWeekday = () => {
  const date = new Date();

  date.setMonth(date.getMonth() - 1);
  date.setDate(1);

  const weekdayIndex = getWeekdayIndex(date);
  
  return weekdayIndex;
}