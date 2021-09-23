export const conflictArray = (conflictArrayValue) => {
  return Array.isArray(conflictArrayValue)
    ? [].concat(...conflictArrayValue.map(conflictArray))
    : conflictArrayValue;
};

export const getConflicts = (arrs) => {
  return arrs.map((arr) => boardConflicts(arr));
};

export const getDeepArrayCopy = (array) => {
  return JSON.parse(JSON.stringify(array));
};

const boardConflicts = (arr) => {
  const conflictMap = {};
  for (let i = 0; i < arr.length; i++) {
    let currArr = arr[i];
    if (currArr.cellValue !== '0') {
      if (conflictMap.hasOwnProperty(currArr.cellValue)) {
        conflictMap[currArr.cellValue].push(currArr.cellId);
      } else {
        conflictMap[currArr.cellValue] = [currArr.cellId];
      }
    }
  }
  return Object.values(conflictMap).filter((arr) => arr.length > 1);
};
