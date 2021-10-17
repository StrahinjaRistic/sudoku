import { LoginTypes, RegistrationTypes } from 'types/inputTypes';

/* const fetchController = new AbortController();
const logPath = '/auth/local';
const regPath = '/auth/local/register';

export const onSubmitHandler = (
  event: React.FormEvent,
  form: RegistrationTypes | LoginTypes
) => {
  event.preventDefault();
  let objCount = countObjectKeys(form);
  let bodyType =
    objCount > 2
      ? { identifier: form.userName.value, password: form.password.value }
      : {
          username: form.userName.value,
          email: form.email.value,
          password: form.password.value,
        };

  const { signal } = fetchController;

  let timer = setTimeout(() => {
    fetchController.abort();
    console.log('aborted');
  }, 5000);
  fetch(`'http://localhost:1337'${objCount > 2 && regPath}`, {
    signal,
    method: 'POST',
    body: JSON.stringify({
      bodyType,
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

const countObjectKeys = (currObject: LoginTypes | RegistrationTypes) => {
  return Object.keys(currObject).length;
}; */
