import {AppActions} from './actions';
import * as appEvents from './events';
import AppState from './types';

const initialState: AppState = {
  spinner: true,
};

export default (state = initialState, action: AppActions): AppState => {
  switch (action.type) {
    case appEvents.APP_SPINNER:
      return {
        ...state,
        spinner: action.payload,
      };
    default:
      return state;
  }
};
