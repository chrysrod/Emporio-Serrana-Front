import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { isAuthenticated } from './services/auth';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';

const PrivateRoute = ({ component: Component, path }) => (
  <Route
    path={path}
    render={({ location }) =>
      isAuthenticated() ? (
        <Component />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SignIn} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
    </Switch>
  </BrowserRouter>
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

PrivateRoute.defaultProps = {
  location: undefined,
};

export default Routes;
