import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default ({ component: Component, ...other }) => (
  <Route
    {...other}
    render={props =>
      localStorage.getItem('isAuthenticated') ? ( // Change using state/store
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      )
    }
  />
);
