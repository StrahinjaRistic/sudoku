import React, { useState } from 'react';
import { getFormattedPuzzle } from 'sudokuBuild/tableBuild';


const GameContext = React.createContext({
  tableState: [],
  setTableState: () => {},
  conflicts: [],
  setConflicts: () => {},
  timerOn: true,
  setTimerOn: () => {},
  time: 0,
  setTime: () => {}
});

export const GameContextProvider = (props) => {
  let [tableState, setTableState] = useState(getFormattedPuzzle());
  let [conflicts, setConflicts] = useState([]);
  let [timerOn, setTimerOn] = useState([]);
  let [time, setTime] = useState(0);
  return (
    <GameContext.Provider
      value={{
        tableState,
        setTableState,
        conflicts,
        setConflicts,
        timerOn,
        setTimerOn,
        time,
        setTime,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export default GameContext;
