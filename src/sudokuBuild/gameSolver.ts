export const conflictArray = (conflictArrayValue: any): any => {
  return Array.isArray(conflictArrayValue)
    ? [].concat(...conflictArrayValue.map(conflictArray))
    : conflictArrayValue;
};

export const getConflicts = (arrs: any) => {
  return arrs.map((arr: any) => boardConflicts(arr));
};

export const getDeepArrayCopy = (array: any) => {
  return JSON.parse(JSON.stringify(array));
};

const boardConflicts = (arr: any) => {
  const conflictMap: any = {};
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
  return Object.values(conflictMap).filter((arr: any) => arr.length > 1);
};
