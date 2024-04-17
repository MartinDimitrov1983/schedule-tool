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
