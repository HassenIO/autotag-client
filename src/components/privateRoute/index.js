import React from 'react';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Auth } from 'aws-amplify';

class PrivateRoute extends React.Component {
  async componentDidMount() {
    try {
      await Auth.currentAuthenticatedUser();
    } catch (e) {
      this.props.history.push('/login');
    }
  }

  render() {
    const { component: Component, ...other } = this.props;
    return <Route {...other} render={props => <Component {...props} />} />;
  }
}

export default withRouter(PrivateRoute);
