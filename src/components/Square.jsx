import React from 'react';
import styled from 'styled-components';

const TableCell = styled.td`
  border: 1px solid var(--color-grey-lighter);
  padding: 12px 16px;
  color: ${(props) => (props.filled ? 'white' : 'black')};
  cursor: pointer;
  &:nth-child(3n) {
    border-right: 2px solid var(--color-grey);
    
  }
  @media screen and (max-width: 670px) {
    text-align: center;
  }
  @media screen and (max-width: 500px) {
    font-size: 18px;
    padding: 16px 10px;
  }
  @media screen and (max-width: 350px) {
    font-size: 16px;
    padding: 4px 0;
  }
  @media screen and (max-width: 300px) {
    font-size: 14px;
    padding: 2px 0;
  }
`;

const SquareInput = styled.input`
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
  border: 0.5px solid black;
  padding: 0;
  margin: 0;
  height: 40px;
  width: 40px;
  text-align: center;
  font-size: 28px;
  input[type='text']:disabled {
    background-color: #ededed;
  }
`;

const Square = (props) => {

  const generateSquareContent = () => {
    console.log('SQUARE: ', props.editable)
    const disabled = !props.editable;
    const squareValue = props.value === '0' ? '' : props.value;

    /* const style = {};
    const rowI = props.rowIndex;
    const colI = props.colIndex;
    if (rowI > 0 && rowI % 3 === 0) {
      style['borderTop'] = '2px solid black';
    }
    if (colI > 0 && colI % 3 === 0) {
      style['borderLeft'] = '2px solid black';
    }
   // if (this.props.conflict) {
      if (this.props.editable) {
        style['background'] = 'red';
      } else {
        style['border'] = '1px solid red';
      }
//   } */
  
  return (
    <TableCell>
      <SquareInput
        type="text"
        value={squareValue}
        disabled={disabled}
        onChange={inputChangeHandler}
      />
    </TableCell>
  );
}

const inputChangeHandler = (e) => {
  console.log(e.target.value);
}
return generateSquareContent();
}

export default Square;