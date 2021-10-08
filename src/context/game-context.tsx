import React, { useState } from 'react';
import { getFormattedPuzzle } from 'sudokuBuild/tableBuild';

type TableState = {
  cellValue: string;
  cellId: string;
  editable: boolean;
};

type GameContextProps = {
  tableState: TableState[][];
  setTableState: React.Dispatch<React.SetStateAction<any[]>>;
  conflicts: string[];
  setConflicts: React.Dispatch<React.SetStateAction<string[]>>;
};

const GameContext = React.createContext<GameContextProps>({
  tableState: [],
  setTableState: () => {},
  conflicts: [],
  setConflicts: () => {},
});

export const GameContextProvider: React.FC = (props) => {
  let [tableState, setTableState] = useState(getFormattedPuzzle());
  let [conflicts, setConflicts] = useState<string[]>([]);

  return (
    <GameContext.Provider
      value={{
        tableState,
        setTableState,
        conflicts,
        setConflicts,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export default GameContext;
