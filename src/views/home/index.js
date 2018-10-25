import React, { Component } from 'react';
import { Title, Layer } from '../../components';

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

export default Home;
