import authModel, { init as initAuth } from '../models/auth';

export default {
  auth: authModel.create(initAuth)
};
