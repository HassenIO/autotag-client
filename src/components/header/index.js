import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import { Menu } from 'semantic-ui-react';
import { wrio } from '../../lib';
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
        <Menu>
          <Menu.Item header name="Autotag" onClick={this.handleItemClick} />
          <Menu.Menu position="right">
            {isAuthenticated && (
              <Menu.Item name="logout" onClick={this.handleLogout} />
            )}
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default wrio(['store'], Header);
