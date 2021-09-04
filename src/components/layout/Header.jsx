import React from 'react';

import styled from 'styled-components';

const Head = styled.header`
  position: relative;
  border-bottom: 2px solid var(--color-grey);
  padding: 0 20px;
  h1 {
    float: left;
    font-size: 24px;
    font-weight: 600;
    line-height: 2.75;
    color: var(--color-grey);
    -webkit-text-rendering: optimizeLegibility;
    -moz-text-rendering: optimizeLegibility;
    text-rendering: optimizeLegibility;
  }
  h2 {
    float: right;
    font-size: 18px;
    font-weight: 400;
    line-height: 2;
    color: var(--color-grey);
    padding-top: 16px;
    cursor: pointer;
  }
  :after {
    content: '';
    display: block;
    clear: both;
  }
`;

const Header = () => {
  return (
    <Head>
      <h1>SUDOKU</h1>
      <h2>New Game</h2>
    </Head>
  );
};

export default Header;
