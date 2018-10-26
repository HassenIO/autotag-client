import { withRouter } from 'react-router';
import { inject, observer } from 'mobx-react';

export default (Component, stores = ['store']) =>
  withRouter(inject(...stores)(observer(Component)));
