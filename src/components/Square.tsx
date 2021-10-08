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
  background: ${(props: StyledProps) => props.conflicts && 'red'};
  color: ${(props: StyledProps) => props.conflicts && 'black'};
`;

interface StyledProps {
  conflicts: boolean;
}

const Square: React.FC<{
  editable: boolean;
  value: string;
  conflict: boolean;
  rowIndex: number;
  colIndex: number;
  onValueChange: (rowI: number, colI: number, newSquareValue: string) => void;
}> = (props) => {
  const generateSquareContent = () => {
    const disabled = !props.editable;
    const squareValue = props.value === '0' ? '' : props.value;

    return (
      <TableCell>
        <SquareInput
          type="text"
          conflicts={props.conflict}
          value={squareValue}
          disabled={disabled}
          onChange={squareValueChangeHandler}
        />
      </TableCell>
    );
  };

  const squareValueChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newSquareValue = event.target.value;
    if (isValidInput(newSquareValue)) {
      const rowI = props.rowIndex;
      const colI = props.colIndex;
      props.onValueChange(rowI, colI, newSquareValue);
    }
  };

  const isValidInput = (value: string) => {
    const reg = /^[0-9\b]+$/;
    return value === '' || (value.length === 1 && reg.test(value));
  };

  return generateSquareContent();
};

export default Square;
