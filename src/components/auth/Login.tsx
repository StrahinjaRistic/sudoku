import { useContext, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import Form from 'components/auth/Form';
import ButtonSudoku from 'components/UI/Button';
import NavLink from 'components/auth/NavLink';

import { LoginTypes } from 'types/inputTypes';
import { updateFormHandler, inputTouchHandler } from 'utility/validation';

import GameContext from 'context/game-context';

interface Props extends RouteComponentProps {}

const Login = ({ history }: Props) => {
  const fetchController = new AbortController();

  const { setIsAuth } = useContext(GameContext);

  const [formIsValid, setFormIsValid] = useState<boolean>(false);
  const [loginForm, setLoginForm] = useState<LoginTypes>({
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
        maxLength: 15,
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
    fetch('http://localhost:1337/auth/local', {
      signal,
      method: 'POST',
      body: JSON.stringify({
        identifier: loginForm.userName.value,
        password: loginForm.password.value,
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
        localStorage.setItem('token', data.jwt);
        setIsAuth(true);
        history.push('/game');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const inputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    logFormName: string
  ) => {
    let updateForm = updateFormHandler(event, logFormName, loginForm);
    setFormIsValid(updateForm.formIsValid);
    setLoginForm(updateForm.updatedForm);
  };

  const touchedHandler = (
    event: React.FocusEvent<HTMLInputElement>,
    logFormName: string
  ) => {
    setLoginForm(inputTouchHandler(event, logFormName, loginForm));
  };
  return (
    <>
      <Form
        form={loginForm}
        submit={onSubmitHandler}
        inputChange={inputChangeHandler}
        inputTouched={touchedHandler}
        formName="Log in"
      >
        <ButtonSudoku disabled={!formIsValid}>Log in</ButtonSudoku>
        <NavLink to="/registration">Registration</NavLink>
      </Form>
    </>
  );
};

export default Login;
