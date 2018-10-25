import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { PrivateRoute, Header } from '../components';
import View from '../views';

/**
 * Define routes and their components. Ordering is important!
 * Always keep "not found" view the latest.
 */
export default () => {
  return (
    <Fragment>
      <Header />
      <Switch>
        <PrivateRoute exact path="/" component={View.Home} />
        <Route exact path="/login" component={View.Login} />
        <Route exact path="/logout" component={View.Logout} />
        <PrivateRoute exact path="/project/:id" component={View.Project} />
        <PrivateRoute
          exact
          path="/project/:project_id/resource/:id"
          component={View.Resource}
        />
        <Route path="*" component={View.NotFound} />
      </Switch>
    </Fragment>
  );
};
