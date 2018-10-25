import { types } from 'mobx-state-tree';

const authModel = types
  .model({
    isAuthenticated: types.boolean
  })
  .views(self => ({
    notAuthenticated: () => !self.isAuthenticated
  }))
  .actions(self => ({
    login: () => (self.isAuthenticated = true),
    logout: () => (self.isAuthenticated = false)
  }));

export default authModel;

export const init = {
  isAuthenticated: false
};
