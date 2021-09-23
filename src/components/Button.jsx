import React from 'react';

import styled from 'styled-components';

const ButtonContainer = styled.div`
  position: relative;
  text-align: center;
  line-height: 1.5;
  padding-top: 4px;
  margin: 0 30px;
`;

const Button = styled.button`
  display: inline-block;
  padding: 0.3em 1.2em;
  margin: 0 0.3em 0.3em 0;
  border-radius: 2em;
  box-sizing: border-box;
  font-weight: 300;
  color: #ffffff;
  background-color: #4eb5f1;
  text-align: center;
  transition: all 0.2s;
  font-size: 1.2em;
  &:hover {
    background-color: var(--color-grey-lighter);
  }
`;


const ButtonSudoku = (props) => {
  return (
    <ButtonContainer>
      <Button onClick={props.onVerify}>Check Validity</Button>
    </ButtonContainer>
  );
}

export default ButtonSudoku;