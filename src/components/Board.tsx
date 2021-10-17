import { useContext } from 'react';
import GameContext from 'context/game-context';
import Square from 'components/Square';
import ButtonSudoku from 'components/UI/Button';

import styled from 'styled-components';

const Game = styled.section`
  width: 100%;
  @media screen and (max-width: 670px) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
`;

const GameTable = styled.table`
  border: 3px solid var(--color-grey-lighter);
  border-collapse: collapse;
  margin: 20px auto;
`;

const TableRow = styled.tr`
  &:nth-child(3n) {
    border-bottom: 3px solid var(--color-grey-lighter);
  }
`;

const Board: React.FC<{
  onSquareValueChange: (i: number, j: number, newValue: string) => void;
  onVerifyClick: () => void;
}> = (props) => {
  let { tableState, conflicts } = useContext(GameContext);

  const squareValueChangeHandler = (i: number, j: number, newValue: string) => {
    props.onSquareValueChange(i, j, newValue);
  };

  const generateBoard = () => {
    const table = [];
    for (let i = 0; i < tableState.length; i++) {
      let currRow = [];
      for (let j = 0; j < tableState[i].length; j++) {
        const conflict = conflicts.includes(i + '' + j) ? true : false;

        let currSquare = (
          <Square
            key={'' + i + j}
            value={tableState[i][j].cellValue}
            editable={tableState[i][j].editable}
            conflict={conflict}
            rowIndex={i}
            colIndex={j}
            onValueChange={squareValueChangeHandler}
          />
        );
        currRow.push(currSquare);
      }
      table.push(<TableRow key={i}>{currRow}</TableRow>);
    }
    return table;
  };

  return (
    <>
      <Game>
        <GameTable>
          <tbody>{generateBoard()}</tbody>
        </GameTable>
      </Game>
      <ButtonSudoku onVerify={props.onVerifyClick} disabled={false}>
        Check Validity
      </ButtonSudoku>
    </>
  );
};

export default Board;
