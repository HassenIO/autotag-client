import { withRouter } from 'react-router';
import { inject, observer } from 'mobx-react';

export default (stores, Component) =>
  withRouter(inject(...stores)(observer(Component)));
