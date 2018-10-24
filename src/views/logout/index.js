import React from 'react';
import { connect } from 'react-redux';
import { Auth } from 'aws-amplify';

function mapStateToProps(state) {
  return state;
}

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

export default connect(mapStateToProps)(Logout);
