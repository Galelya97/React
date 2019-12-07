import {StoreEnhancer, applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

const middleware = applyMiddleware(thunk);
const reduxDevTools: StoreEnhancer =
  process.env.NODE_ENV === 'production' ? middleware : composeWithDevTools(middleware);

const store = createStore(rootReducer, undefined, reduxDevTools);

export type State = ReturnType<typeof store.getState>;
export default store;
