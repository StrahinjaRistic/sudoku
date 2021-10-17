import { useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import GameContext from 'context/game-context';

const Logout = () => {
  const { setIsAuth } = useContext(GameContext);
  useEffect(() => {
    localStorage.removeItem('token');
    setIsAuth(false);
  }, []);

  return <Redirect to="/login" />;
};

export default Logout;
