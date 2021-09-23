import React, { useContext } from 'react';
import GameContext from 'context/game-context';

import Board from 'components/Board';
import { stringify } from 'sudokuBuild/tableBuild';


const SudokuTable = () => {
  const { tableState, setTableState,setConflicts } = useContext(GameContext);

  const getDeepArrayCopy = (array) => {
    return JSON.parse(JSON.stringify(array));
  };

  const squareValueChangeHandler = (i, j, newValue) => {
    setTableState((prevState) => {
      const newTableState = getDeepArrayCopy(prevState);
      const newEditable = prevState[i][j].editable;

      newTableState[i][j] = {
        cellValue: newValue,
        cellId: stringify(i, j),
        editable: newEditable,
      };
      return setTableState(newTableState);
    });
  };

  const verifyClickHandler = () => {
    const rows = {};
    const columns = {};
    const boxes = {};

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

  const conflictArray = (conflictArrayValue) => {
    return Array.isArray(conflictArrayValue)
      ? [].concat(...conflictArrayValue.map(conflictArray))
      : conflictArrayValue;
  };

  const getConflicts = (arrs) => {
    return arrs.map((arr) => boardConflicts(arr));
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
  return (
    <Board
      onSquareValueChange={squareValueChangeHandler}
      onVerifyClick={verifyClickHandler}
      conflicts={tableState.conflicts}
    />
  );
};

export default SudokuTable;
