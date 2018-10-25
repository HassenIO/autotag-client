import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { inject, observer } from 'mobx-react';
import { Auth } from 'aws-amplify';
import { Menu } from 'semantic-ui-react';
import { Layer } from '../';
import './style.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: 'home' };
    this.authStore = props.store.auth;
  }

  async componentDidMount() {
    try {
      await Auth.currentAuthenticatedUser();
      if (this.authStore.notAuthenticated) this.authStore.login();
    } catch (e) {}
  }

  handleLogout = () => {
    this.authStore.logout();
    this.props.history.push('/logout');
  };

  render() {
    const { isAuthenticated } = this.authStore;
    return (
      <div className="Header">
        <Layer>
          <Menu>
            <Menu.Item header name="Autotag" onClick={this.handleItemClick} />
            <Menu.Menu position="right">
              {isAuthenticated && (
                <Menu.Item name="logout" onClick={this.handleLogout} />
              )}
            </Menu.Menu>
          </Menu>
        </Layer>
      </div>
    );
  }
}

export default withRouter(inject('store')(observer(Header)));
