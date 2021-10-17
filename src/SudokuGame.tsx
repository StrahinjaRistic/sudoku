import SudokuTable from 'components/layout/SudokuTable';

import GameTimer from 'components/GameTimer';
import styled from 'styled-components';

const GameContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

const SudokuGame = () => {
  return (
    <>
      <GameContainer>
        <SudokuTable />
      </GameContainer>
      <GameTimer />
    </>
  );
};

export default SudokuGame;
