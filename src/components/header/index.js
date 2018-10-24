import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Menu } from 'semantic-ui-react';
import { Auth } from 'aws-amplify';
import { authActions } from '../../actions';
import { Layer } from '../';
import './style.css';

function mapStateToProps(state) {
  return {
    isAuthenticated: state.authentication.isAuthenticated
  };
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: 'home' };
  }

  async componentDidMount() {
    try {
      await Auth.currentAuthenticatedUser();
      if (!this.props.isAuthenticated) this.props.dispatch(authActions.login());
    } catch (e) {}
  }

  handleLogout = () => {
    this.props.dispatch(authActions.logout());
    this.props.history.push('/logout');
  };

  render() {
    return (
      <div className="Header">
        <Layer>
          <Menu>
            <Menu.Item header name="Autotag" onClick={this.handleItemClick} />
            <Menu.Menu position="right">
              {this.props.isAuthenticated && (
                <Menu.Item name="logout" onClick={this.handleLogout} />
              )}
            </Menu.Menu>
          </Menu>
        </Layer>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Header));
