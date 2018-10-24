import React from 'react';
import { Header } from 'semantic-ui-react';
import './style.css';

export default ({ children }) => {
  return (
    <div className="Title">
      <Header as="h1">{children}</Header>
    </div>
  );
};
