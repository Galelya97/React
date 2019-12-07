import {createAction} from '../../redux-utils/actionFactory';
import {ActionsUnion} from '../../redux-utils/types';
import * as appEvents from './events';

const appSpinner = (payload: boolean) => createAction(appEvents.APP_SPINNER, payload);

const appActions = {
  appSpinner,
};

export type AppActions = ActionsUnion<typeof appActions>;
export default appActions;
