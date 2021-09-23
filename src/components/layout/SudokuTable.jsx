import React, { useContext, useState } from 'react';
import GameContext from 'context/game-context';
import Square from 'components/Square';

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

/* const TableRow = styled.tr`
  &:nth-child(3n) {
    border-bottom: 2px solid var(--color-grey);
  }
`; */



const SudokuTable = () => {
  const rows = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  let { tableState } = useContext(GameContext);

  const generateTable = () => {
    const table = [];
    for(let i = 0; i < tableState.length; i++) {
      let currRow = [];
      for (let j = 0; j < tableState[i].length; j++) {
        let currSquare = (
          <Square
            key={'' + i + j}
            value={tableState[i][j].cellValue}
            editable={tableState[i][j].editable}
            rowIndex={i}
            colIndex={j}
          />
        );
        currRow.push(currSquare);
      }
      table.push(<tr key={i}>{currRow}</tr>);
    }
    return table;
  }

  
  return (
    <Game>
      <GameTable>
        <tbody>
          {generateTable()}
          {/*  {rows.map((row) => {
            return (
              <TableRow key={row}>
                {rows.map((column) => {
                  const indexOfArray = row * 9 + column;
                  const value = rows[indexOfArray];
                  return (
                    <TableCell filled={value === '0' && true}>
                      {value}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })} */}
        </tbody>
      </GameTable>
    </Game>
  );
};

export default SudokuTable;
