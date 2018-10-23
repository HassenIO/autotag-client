import { combineReducers } from 'redux';
import authentication from './authentication';
import home from './home';

export default combineReducers({
  authentication,
  home
});
