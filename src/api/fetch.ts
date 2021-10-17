function fetchData({ endpoint, params, query = {}, method = 'GET', customHeader }) {
  const initialSetup = {
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
        ...customHeader,
      },
  }
  return fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify({
        ...params
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
}

export default fetchData;
