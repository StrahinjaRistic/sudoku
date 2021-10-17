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
  &.isDisabled {
    cursor: not-allowed;
    opacity: 0.8;
    background-color: var(--color-grey-lighter);
  }
`;

const ButtonSudoku: React.FC<{ onVerify?: () => void; disabled?: boolean }> = (
  {
    disabled = false,
    children,
    onVerify,
  }
) => {
  return (
    <ButtonContainer>
      <Button
        className={disabled ? 'isDisabled' : ''}
        disabled={disabled}
        onClick={onVerify}
      >
        {children}
      </Button>
    </ButtonContainer>
  );
};

export default ButtonSudoku;
