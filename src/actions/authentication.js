import CONST from '../config/const';

export default {
  login: () => {
    return {
      type: CONST.ACTIONS.LOGIN_USER
    };
  }
};