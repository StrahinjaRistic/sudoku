import { useContext } from 'react';
import GameContext from 'context/game-context';

import Board from 'components/Board';
import { stringify } from 'sudokuBuild/tableBuild';
import {
  conflictArray,
  getConflicts,
  getDeepArrayCopy,
} from 'sudokuBuild/gameSolver';

const SudokuTable = () => {
  const { tableState, setTableState, setConflicts } = useContext(GameContext);

  const squareValueChangeHandler = (i: number, j: number, newValue: string) => {
    setTableState((prevState) => {
      const newTableState = getDeepArrayCopy(prevState);
      const newEditable = prevState[i][j].editable;

      newTableState[i][j] = {
        cellValue: newValue,
        cellId: stringify(i, j),
        editable: newEditable,
      };
      return newTableState;
    });
  };

  const verifyClickHandler = () => {
    const rows: any = {};
    const columns: any = {};
    const boxes: any = {};

    for (let i = 0; i < tableState.length; i++) {
      rows[i] = getDeepArrayCopy(tableState[i]);
      for (let j = 0; j < tableState[i].length; j++) {
        if (columns.hasOwnProperty(j)) {
          columns[j].push(tableState[i][j]);
        } else {
          columns[j] = [tableState[i][j]];
        }
        const boxId = stringify(Math.floor(i / 3), Math.floor(j / 3));
        if (boxes.hasOwnProperty(boxId)) {
          boxes[boxId].push(tableState[i][j]);
        } else {
          boxes[boxId] = [tableState[i][j]];
        }
      }
    }
    const conflictRows = conflictArray(getConflicts(Object.values(rows)));
    const conflictColumns = conflictArray(getConflicts(Object.values(columns)));
    const conflictBoxes = conflictArray(getConflicts(Object.values(boxes)));

    const mergedConflicts = [
      ...conflictRows,
      ...conflictColumns,
      ...conflictBoxes,
    ];
    setConflicts(mergedConflicts);
  };

  return (
    <Board
      onSquareValueChange={squareValueChangeHandler}
      onVerifyClick={verifyClickHandler}
    />
  );
};

export default SudokuTable;
