import { lazy } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';

import SudokuGame from 'SudokuGame';
import Registration from 'components/auth/Registration';
import Logout from 'components/auth/Logout';
// import PrivateRoute from 'allRoutes/PrivateRoute';
import { userRoutes } from 'api/constants';

const Login = lazy(() => import('components/auth/Login'));

const userLogedRoutes = [
  {
    path: userRoutes.LOGIN,
    component: Login,
    exact: true,
  }
];

getRoutesPerRole(role: UserRolesType) {
  switch role {
    case ROLES.DOCTOR:
      return [...allowedRoutesToAll, ...authenticatedRoutes, ...doctorsRoutes, ...notFound];

    default
  }
}




// quick start guide
// user manula
// terms and con


// login


// practice
// notes

// patient/:id
// /home
// recordings
// asthma action

// account management
// subscriptions
// payment


const RouterAll = () => {
  return (
    <Router>
      <Header />
      <Switch>
        {userLogedRoutes.map((props) => <Route {...props}  />)}
        <Route exact path="/" component={() => <Redirect to="/login" />} />
        <Route path="/game" component={SudokuGame} />
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
        <Route path="/logout" component={Logout} />
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default RouterAll;
