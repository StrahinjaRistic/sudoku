import puzzles from 'Puzzels';

export const getFormattedPuzzle = () => {
  const puzzle = getRandomPuzzle();
  const formattedPuzzle = formatPuzzle(puzzle);
  return formattedPuzzle;
};

const getRandomPuzzle = () => {
  return puzzles[Math.floor(Math.random() * puzzles.length)];
};

const formatPuzzle = (puzzle: string) => {
  const formattedPuzzle = createArray(9);
  for (let i = 0; i < puzzle.length; i++) {
    const rowId = getRowId(i);
    const colId = getColId(i);

    const editable = puzzle[i] === '0' ? true : false;

    formattedPuzzle[rowId][colId] = {
      cellValue: puzzle[i],
      cellId: stringify(rowId, colId),
      editable: editable,
    };
  }
  return formattedPuzzle;
};
export const stringify = (num1: number, num2: number) => {
  return num1 + '' + num2;
};

const getRowId = (i: number) => {
  return Math.floor(i / 9);
};

const getColId = (i: number) => {
  return i % 9;
};

function createArray(length: number) {
  var arr = new Array(length || 0),
    i = length;
  if (arguments.length === 1) {
    var args: any = Array.prototype.slice.call(arguments, 1);

    while (i--) arr[length - 1 - i] = createArray.apply(arguments, args);
  }

  return arr;
}
