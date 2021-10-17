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
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
};

const GameContext = React.createContext<GameContextProps>({
  tableState: [],
  setTableState: () => {},
  conflicts: [],
  setConflicts: () => {},
  isAuth: false,
  setIsAuth: () => {},
});

export const GameContextProvider: React.FC = (props) => {
  let [tableState, setTableState] = useState(getFormattedPuzzle());
  let [conflicts, setConflicts] = useState<string[]>([]);
  let [isAuth, setIsAuth] = useState<boolean>(false);

  return (
    <GameContext.Provider
      value={{
        tableState,
        setTableState,
        conflicts,
        setConflicts,
        isAuth,
        setIsAuth,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export default GameContext;
