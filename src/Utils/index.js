export function createArrays(templateArray, exampleArray) {
  const exampleLength = exampleArray.length;

  if (exampleLength === 0) {
    return [];
  }

  const result = [];

  for (let i = 0; i < exampleLength; i++) {
    const index = i % templateArray.length;
    result.push(templateArray[index]);
  }

  return result;
}

export function createTemps(arr, length) {
  let result = [];

  if (arr.length === 0 || length === 0) {
    return result;
  }
  for (let i = 0; i < arr.length; i += length) {
    let chunk = arr.slice(i, i + length);
    result.push(chunk);
  }

  return result;
}

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

export function shouldDisableButtons(times) {
  return !times.some((element) => element.length > 0);
}

export function shouldDisableUpload(times) {
  if (times.length === 0) {
    return true;
  }

  return times.some((element) => element.length === 0);
}

export function isCompleted(times) {
  return times.every((element) => element.length > 0);
}

export function calculateTemplateLength(times) {
  let length = 0;

  times.forEach((element, index) => {
    if (element.length > 0) {
      length = index + 1;
    }
  });

  return length;
}

export function calculateEndDate(startDate, periodDays) {
  startDate = new Date(startDate);

  let endDate = new Date(startDate);

  endDate.setDate(endDate.getDate() + periodDays);

  return endDate;
}
