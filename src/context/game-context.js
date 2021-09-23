import React, { useState } from 'react';
import { getFormattedPuzzle } from 'sudokuBuild/tableBuild';


const GameContext = React.createContext({
  tableState: [],
  setTableState: () => {},
  conflicts: [],
  setConflicts: () => {},
});

export const GameContextProvider = (props) => {
  let [tableState, setTableState] = useState(getFormattedPuzzle());
  let [conflicts, setConflicts] = useState([]);
  
  return (
    <GameContext.Provider
      value={{
        tableState,
        setTableState,
        conflicts,
        setConflicts
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export default GameContext;
