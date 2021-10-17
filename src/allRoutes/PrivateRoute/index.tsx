import { useContext } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import GameContext from 'context/game-context';

interface PrivateRouteProps extends RouteProps {}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ ...rest }) => {
  const { isAuth } = useContext(GameContext);

  if (!isAuth) return <Redirect to="/login" />;
  return <Route {...rest} />;
};

export default PrivateRoute;
