/* eslint-disable no-unused-vars */
import { combineReducers } from 'redux';
import auth from 'pages/Auth/redux/auth';

function lastAction(state = null, action) {
  return action;
}
export default combineReducers({
  auth,
  lastAction,
});
