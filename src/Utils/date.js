export function formatDate(dateString) {
  const d = dateString.getDate();
  const m = dateString.getMonth() + 1;
  const y = dateString.getFullYear();
  return '' + y + '-' + (m <= 9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
}

export function convertDate(date) {
  const dateObj = new Date(date);

  const day = dateObj.getDate().toString().padStart(2, '0');
  const month = (dateObj.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
  const year = dateObj.getFullYear();

  return `${day}.${month}.${year}`;
}

export function calculatPeriod(startDate, endDate) {
  const date1 = new Date(startDate);
  const date2 = new Date(endDate);
  const Difference_In_Time = date2.getTime() - date1.getTime();

  return Math.round(Difference_In_Time / (1000 * 60 * 60 * 24));
}

export function getDatesAndDays(startDate, endDate) {
  const result = [];

  if (typeof startDate !== 'string' || typeof endDate !== 'string') {
    return result;
  }
  const currentDate = new Date(startDate);
  const endDateObj = new Date(endDate);

  while (currentDate <= endDateObj) {
    const dayName = currentDate.toLocaleDateString('en-US', {
      weekday: 'long',
    });

    result.push({
      date: currentDate.toISOString().split('T')[0],
      day: dayName,
    });

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return result;
}

export function calculateEndDate(startDate, periodDays) {
  startDate = new Date(startDate);

  let endDate = new Date(startDate);

  endDate.setDate(endDate.getDate() + periodDays);

  return endDate;
}
