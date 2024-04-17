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

export function calculateTemplateLength(times) {
  let length = 0;

  times.forEach((element, index) => {
    if (element.length > 0) {
      length = index + 1;
    }
  });

  return length;
}
