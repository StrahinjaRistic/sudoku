import React from 'react';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';

import styled from 'styled-components';
import GlobalStyle from 'theme/globalStyles';

const Container = styled.div`
  max-width: 700px;
  min-width: 270px;
  margin: 0 auto;
  padding: 0 10px;
`;

const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Footer />
    </Container>
  );
};

export default App;
