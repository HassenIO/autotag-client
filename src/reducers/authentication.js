import CONST from '../config/const';

const INITIAL_STATE = {
  isAuthenticated: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CONST.ACTIONS.LOGIN_USER:
      return { ...state, isAuthenticated: true };
    default:
      return state;
  }
};
