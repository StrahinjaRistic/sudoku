import { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import Form from 'components/auth/Form';
import ButtonSudoku from 'components/UI/Button';
import NavLink from 'components/auth/NavLink';

import { RegistrationTypes } from 'types/inputTypes';
import { updateFormHandler, inputTouchHandler } from 'utility/validation';

interface Props extends RouteComponentProps {}

const Registration = ({ history }: Props) => {
  const fetchController = new AbortController();
  const [formIsValid, setFormIsValid] = useState<boolean>(false);
  const [registrationForm, setRegistrationForm] = useState<RegistrationTypes>({
    userName: {
      type: 'text',
      placeholder: 'User Name',
      value: '',
      valid: false,
      touched: false,
      message: '',
      validation: {
        required: true,
      },
    },
    password: {
      type: 'password',
      placeholder: 'Password',
      value: '',
      valid: false,
      touched: false,
      message: '',
      validation: {
        required: true,
        minLength: 6,
        maxLength: 10,
      },
    },
    email: {
      type: 'email',
      placeholder: 'Email',
      value: '',
      valid: false,
      touched: false,
      message: '',
      validation: {
        required: true,
        isMail: true,
      },
    },
  });

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const { signal } = fetchController;
    let timer = setTimeout(() => {
      fetchController.abort();
      console.log('aborted');
    }, 5000);
    fetch('http://localhost:1337/auth/local/register', {
      signal,
      method: 'POST',
      body: JSON.stringify({
        username: registrationForm.userName.value,
        email: registrationForm.email.value,
        password: registrationForm.password.value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => {
        if (response.status >= 400 && response.status < 600) {
          throw new Error('Bad response from server');
        }
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(response);
      })
      .then((data) => {
        clearTimeout(timer);
        data.jwt && history.push('/login');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const inputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    regFormName: string
  ) => {
    let updateForm = updateFormHandler(event, regFormName, registrationForm);
    setRegistrationForm(updateForm.updatedForm);
    setFormIsValid(updateForm.formIsValid);
  };

  const touchedHandler = (
    event: React.FocusEvent<HTMLInputElement>,
    regFormName: string
  ) => {
    setRegistrationForm(
      inputTouchHandler(event, regFormName, registrationForm)
    );
  };

  return (
    <>
      <Form
        form={registrationForm}
        submit={onSubmitHandler}
        inputChange={inputChangeHandler}
        inputTouched={touchedHandler}
        formName="Register"
      >
        <ButtonSudoku disabled={!formIsValid}>Register</ButtonSudoku>
        <NavLink to="/login">Login</NavLink>
      </Form>
    </>
  );
};

export default Registration;
