import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'mobx-react';
import store from './store.js';
import Routes from './routes';
import './app.css';

export default () => (
  <div className="App">
    <Router>
      <Provider store={store}>
        <Routes />
      </Provider>
    </Router>
  </div>
);
