import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Title, Layer } from '../../components';

function mapStateToProps(state) {
  return state;
}

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Layer>
          <Title>List of user projects</Title>
        </Layer>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Home);
