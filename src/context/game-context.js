import React, { useState } from 'react';
import puzzles from 'Puzzels';

const GameContext = React.createContext({
  gameWon: false,
  setGameWon: () => {},
  puzzle: [],
  selectedCell: -1,
  setSelectedCell: () => {},
});

export const GameContextProvider = (props) => {
  let [gameWon, setGameWon] = useState(false);
  let puzzle = Array.from(puzzles[Math.floor(Math.random() * puzzles.length)]);
  let [selectedCell, setSelectedCell] = useState(-1);

  return (
    <GameContext.Provider
      value={{ gameWon, setGameWon, puzzle, selectedCell, setSelectedCell }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export default GameContext;
