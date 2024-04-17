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
