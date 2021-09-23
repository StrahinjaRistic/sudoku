import React from 'react';

import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import SudokuTable from 'components/layout/SudokuTable';

import GameTimer from 'components/GameTimer';

import styled from 'styled-components';

const Container = styled.div`
  max-width: 700px;
  min-width: 270px;
  margin: 0 auto;
  padding: 0 10px;
`;

const GameContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

const SudokuGame = () => {
  return (
    <Container>
      <Header />
      <GameContainer>
        <SudokuTable />
      </GameContainer>
      <GameTimer />
      <Footer />
    </Container>
  );
};

export default SudokuGame;
