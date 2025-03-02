import { combineReducers } from 'redux';

import AuthReducer from './auth.slice';

export default combineReducers({
  auth: AuthReducer,
});
