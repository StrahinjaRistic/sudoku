import styled from 'styled-components';

const InputDiv = styled.div`
  position: relative;
  width: 100%;
  flex-direction: column;
  margin-bottom: 30px;
  display: flex;
`;

const InputElement = styled.input`
  display: block;
  font-family: FontAwesome, 'Roboto', sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 1px solid var(--color-grey-lighter);
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
  transition: border 1s ease;
  &.invalid {
    border: 1px solid red;
  }
  &:hover {
    border: ${({ className }) => (className ? '' : '1px solid #17a589')};
  }
  &.valid {
    border: 1px solid #17a589;
  }
`;
const ErrMsgSmall = styled.small`
  position: absolute;
  bottom: -1.5em;
  font-size: 0.8em;
  color: rgb(255, 0, 0);
`;
type Props = {
  inputType: string;
  isTouched: boolean;
  invalid: boolean;
  shouldValidate: {
    required: boolean;
  };
  errMessage: string;
  inputPlaceholder: string;
  inputValue: string;
  inputName: any;
  change: (event: React.ChangeEvent<HTMLInputElement>) => void;
  clicked: (event: React.FocusEvent<HTMLInputElement>) => void;
};

const Input: React.FC<Props> = (props) => {

  function isInvalid() {
    return props.isTouched &&
            props.invalid &&
            props.shouldValidate;
  }
  let inputElement = null;
  switch (props.inputType) {
    case 'text':
      inputElement = (
        <InputElement
          className={
            isInvalid() ?
            'invalid' : ''
          }
          type={props.inputType}
          placeholder={props.inputPlaceholder}
          value={props.inputValue}
          onChange={props.change}
          name={props.inputName}
          onBlur={props.clicked}
        />
      );
      break;
    case 'password':
      inputElement = (
        <InputElement
          className={
            props.isTouched &&
            props.invalid &&
            props.shouldValidate &&
            'invalid' || ''
          }
          type={props.inputType}
          placeholder={props.inputPlaceholder}
          value={props.inputValue}
          onChange={props.change}
          name={props.inputName}
          onBlur={props.clicked}
        />
      );
      break;
    case 'email':
      inputElement = (
        <InputElement
          className={
            props.isTouched &&
            props.invalid &&
            props.shouldValidate &&
            'invalid' || ''
          }
          type={props.inputType}
          placeholder={props.inputPlaceholder}
          value={props.inputValue}
          onChange={props.change}
          name={props.inputName}
          onBlur={props.clicked}
        />
      );
      break;
    default:
      inputElement = (
        <InputElement
          type={props.inputType}
          placeholder={props.inputPlaceholder}
          value={props.inputValue}
          name={props.inputName}
          onBlur={props.clicked}
        />
      );
  }

  return (
    <InputDiv>
      {inputElement}
      <ErrMsgSmall>{props.errMessage}</ErrMsgSmall>
    </InputDiv>
  );
};

export default Input;
