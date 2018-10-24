import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Menu } from 'semantic-ui-react';
import { Layer } from '../';
import './style.css';

class Header extends Component {
  state = { activeItem: 'home' };

  handleLogout = () => this.props.history.push('/logout');

  render() {
    return (
      <div className="Header">
        <Layer>
          <Menu>
            <Menu.Item header name="Autotag" onClick={this.handleItemClick} />
            <Menu.Menu position="right">
              <Menu.Item name="logout" onClick={this.handleLogout} />
            </Menu.Menu>
          </Menu>
        </Layer>
      </div>
    );
  }
}

export default withRouter(Header);
