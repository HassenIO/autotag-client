import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';

function mapStateToProps(state) {
  return state;
}

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Home page</h1>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Home);
