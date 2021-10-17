import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';

import SudokuGame from 'SudokuGame';
import Login from 'components/auth/Login';
import Registration from 'components/auth/Registration';
import Logout from 'components/auth/Logout';
import PrivateRoute from 'allRoutes/PrivateRoute';

const RouterAll = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <PrivateRoute path="/game" component={SudokuGame} />
        <Route exact path="/" component={() => <Redirect to="/login" />} />
        <Route path="/game" component={SudokuGame} />
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
        <Route path="/logout" component={Logout} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default RouterAll;
