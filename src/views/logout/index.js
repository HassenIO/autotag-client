import React from 'react';
import { Auth } from 'aws-amplify';

class Logout extends React.Component {
  async componentDidMount() {
    try {
      await Auth.signOut();
      this.props.history.push('/login');
    } catch (e) {}
  }

  render() {
    return <p>Logging out...</p>;
  }
}

export default Logout;
