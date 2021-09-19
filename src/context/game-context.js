import React, { useState } from 'react';
import { getFormattedPuzzle } from 'sudokuBuild/tableBuild';


const GameContext = React.createContext({
  tableState: [],
});

export const GameContextProvider = (props) => {
  let tableState = getFormattedPuzzle();

  return (
    <GameContext.Provider value={{ tableState }}>
      {props.children}
    </GameContext.Provider>
  );
};

export default GameContext;
