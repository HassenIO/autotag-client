import Devtools from 'mobx-react-devtools';
import React from 'react';
import { connectReduxDevtools } from 'mst-middlewares';
import remotedev from 'remotedev';

export default ({ store }) => {
  connectReduxDevtools(remotedev, store.auth);
  return <Devtools />;
};
