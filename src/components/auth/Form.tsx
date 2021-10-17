import { device } from 'theme/globalStyles';
import Input from 'components/UI/Input';

import styled from 'styled-components';

const FormStyled = styled.form`
  position: relative;
  z-index: 1;
  background: transparent;
  /* max-width: inherit; */
  padding: 45px;
  text-align: center;
  //box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  border: 3px solid var(--color-grey-lighter);
  @media (max-width: 360px) {
    padding: 33px;
  }
`;
const FormWrapper = styled.div`
  width: 100%;
  margin: 20px auto;
`;

const FormInput = styled.div`
  width: 30em;
  margin: auto;
  @media ${device.mobileS} {
    max-width: 300px;
  }
  @media (max-width: 360px) {
    padding-top: 10%;
    .g-recaptcha iframe {
      max-width: 100%;
      transform: scale(0.7);
      position: relative;
      right: 15%;
      transform-origin: center center;
    }
  }
  @media ${device.mobileM} {
    max-width: 320px;
  }
  @media ${device.mobileL} {
    max-width: 350px;
  }
  @media ${device.tablet} {
    max-width: 392px;
  }
  @media ${device.desktop} {
    max-width: 1140px;
  }
  @media ${device.desktopL} {
    max-width: 1140px;
  }
  @media (max-width: 414px) {
    .g-recaptcha iframe {
      max-width: 100%;
      transform: scale(0.77);
      position: relative;
      right: 12%;
      transform-origin: center center;
    }
  }
`;

type Props = {
  form: any;
  submit: (event: React.FormEvent) => void;
  inputChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    formElement: string
  ) => void;
  inputTouched: (
    event: React.FocusEvent<HTMLInputElement>,
    formElement: string
  ) => void;
  formName: string;
};
const Form: React.FC<Props> = (props) => {
  const formElementsArray = [];
  for (let key in props.form) {
    formElementsArray.push({
      id: key,
      config: props.form[key],
    });
  }
  let newForm = (
    <FormWrapper>
      <FormInput>
        <FormStyled onSubmit={props.submit}>
          {formElementsArray.map((formElement) => (
            <Input
              key={formElement.id}
              inputName={formElement.id}
              inputType={formElement.config.type}
              inputPlaceholder={formElement.config.placeholder}
              inputValue={formElement.config.value}
              isTouched={formElement.config.touched}
              shouldValidate={formElement.config.validation}
              invalid={!formElement.config.valid}
              errMessage={formElement.config.message}
              change={(event) => props.inputChange(event, formElement.id)}
              clicked={(event) => props.inputTouched(event, formElement.id)}
            />
          ))}
          {props.children}
        </FormStyled>
      </FormInput>
    </FormWrapper>
  );
  return <>{newForm}</>;
};

export default Form;
