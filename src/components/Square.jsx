import React from 'react';
import styled from 'styled-components';


const TableCell = styled.td`
  &:nth-child(3n) {
    border-right: 3px solid var(--color-grey-lighter);
  }
  height: 2em;
  width: 2em;
  border: 1px solid #ccc;
  text-align: center;
  outline: none;
`;

const SquareInput = styled.input`
  font-size: 2.5em;
  width: 1em;
  border: none;
  text-align: center;
  outline: none;
  @media screen and (max-width: 670px) {
    font-size: 1.5em;
  }
  background: ${(props) => props.conflict && 'red'};
  color: ${(props) => props.conflict && 'black'};
`;


const Square = (props) => {
  const generateSquareContent = () => {
    const disabled = !props.editable;
    const squareValue = props.value === '0' ? '' : props.value;
  
      return (
        <TableCell>
          <SquareInput
            type="text"
            conflict={props.conflict}
            value={squareValue}
            disabled={disabled}
            onChange={squareValueChangeHandler}
          />
        </TableCell>
      );
}

const squareValueChangeHandler = (e) => {
  const newSquareValue = e.target.value;
  if (isValidInput(newSquareValue)) {
    const rowI = props.rowIndex;
    const colI = props.colIndex;
    props.onValueChange(rowI, colI, newSquareValue);
  }
};

const isValidInput = (value) => {
  const reg = /^[0-9\b]+$/;
  return value === '' || (value.length === 1 && reg.test(value));
}
  

return generateSquareContent();
}

export default Square;