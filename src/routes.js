import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { isAuthenticated } from './services/auth';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Notifications from './pages/Notifications';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Settings from './pages/Settings';
import Sell from './pages/Sell';

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
      <PrivateRoute path="/notifications" component={Notifications} />
      <PrivateRoute path="/reports" component={Reports} />
      <PrivateRoute path="/products" component={Products} />
      <PrivateRoute path="/settings" component={Settings} />
      <PrivateRoute path="/sell" component={Sell} />
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
