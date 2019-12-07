import {combineReducers} from 'redux';

import appReducer from '../App/reducer/reducer';

export default combineReducers({
  app: appReducer,
});
