import puzzles from 'Puzzels';

export const getFormattedPuzzle = () => {
  const puzzle = getRandomPuzzle();
  const formattedPuzzle = formatPuzzle(puzzle);
  return formattedPuzzle;
};

const getRandomPuzzle = () => {
  return puzzles[Math.floor(Math.random() * puzzles.length)];
};



const formatPuzzle = (puzzle) => {
  const formattedPuzzle = createArray(9, 9);
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
const stringify = (num1, num2) => {
  return num1 + '' + num2;
};

 const getRowId = (i) => {
  return Math.floor(i / 9);
};

 const getColId = (i) => {
  return i % 9;
};

function createArray(length) {
  var arr = new Array(length || 0),
    i = length;
  if (arguments.length > 1) {
    var args = Array.prototype.slice.call(arguments, 1);

    while (i--) arr[length - 1 - i] = createArray.apply(this, args);
  }

  return arr;
}


