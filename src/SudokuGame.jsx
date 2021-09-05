import React from 'react';

import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import SudokuTable from 'components/layout/SudokuTable';

import styled from 'styled-components';

const Container = styled.div`
  max-width: 700px;
  min-width: 270px;
  margin: 0 auto;
  padding: 0 10px;
`;

const GameContainer = styled.div`
  display: flex;
  color: var(--color-grey);
  flex-wrap: wrap;
  padding: 0 20px;
`;

const SudokuGame = () => {
  return (
    <Container>
      <Header />
      <GameContainer>
        <SudokuTable />
      </GameContainer>
      <Footer />
    </Container>
  );
};

export default SudokuGame;
