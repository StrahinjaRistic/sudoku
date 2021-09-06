import React from 'react';

import styled from 'styled-components';

const Game = styled.section`
  width: 100%;
`;

const GameTable = styled.table`
  font-family: 'Noto Sans', sans-serif;
  font-size: 26px;
  margin: 30px 0;
  border: 2px solid var(--color-grey);
  border-collapse: collapse;
`;

const TableRow = styled.tr`
  &:nth-child(3n) {
    border-bottom: 2px solid var(--color-grey);
  }
`;
const TableCell = styled.td`
  border: 1px solid var(--color-grey-lighter);
  padding: 20px 18px;
  color: var(--background-color);
  cursor: pointer;
  &:nth-child(3n) {
    border-right: 2px solid var(--color-grey);
  }
`;

const SudokuTable = () => {
  const rows = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const gameArray = [];
  return (
    <Game>
      <GameTable>
        <tbody>
          {rows.map((row) => {
            return (
              <TableRow key={row}>
                {rows.map((column) => {
                  const indexOfArray = row * 9 + column;
                  const value = gameArray[indexOfArray];
                  return <TableCell></TableCell>;
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
