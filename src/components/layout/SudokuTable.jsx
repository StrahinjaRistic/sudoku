import React, { useContext } from 'react';
import GameContext from 'context/game-context';

import styled from 'styled-components';

const Game = styled.section`
  width: 70%;
  @media screen and (max-width: 670px) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
`;

const GameTable = styled.table`
  font-family: 'Noto Sans', sans-serif;
  font-size: 26px;
  margin: 30px 0;
  border: 2px solid var(--color-grey);
  border-collapse: collapse;
  @media screen and (max-width: 670px) {
    width: 100%;
  }
`;

const TableRow = styled.tr`
  &:nth-child(3n) {
    border-bottom: 2px solid var(--color-grey);
  }
`;
const TableCell = styled.td`
  border: 1px solid var(--color-grey-lighter);
  padding: 12px 16px;
  color: ${(props) => props.filled && 'white'};
  cursor: pointer;
  &:nth-child(3n) {
    border-right: 2px solid var(--color-grey);
  }
  @media screen and (max-width: 670px) {
    text-align: center;
  }
  @media screen and (max-width: 500px) {
    font-size: 18px;
    padding: 16px 10px;
  }
  @media screen and (max-width: 350px) {
    font-size: 16px;
    padding: 4px 0;
  }
  @media screen and (max-width: 300px) {
    font-size: 14px;
    padding: 2px 0;
  }
`;

const SudokuTable = () => {
  const rows = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  let { puzzle, selectedCell } = useContext(GameContext);

  return (
    <Game>
      <GameTable>
        <tbody>
          {rows.map((row) => {
            return (
              <TableRow key={row}>
                {rows.map((column) => {
                  const indexOfArray = row * 9 + column;
                  const value = puzzle[indexOfArray];
                  if (value === '0') {
                    return <TableCell filled>{value}</TableCell>;
                  } else {
                    return <TableCell>{value}</TableCell>;
                  }
                })}
              </TableRow>
            );
          })}
        </tbody>
      </GameTable>
    </Game>
  );
};

export default SudokuTable;
