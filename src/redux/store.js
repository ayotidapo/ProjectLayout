/* eslint-disable import/no-extraneous-dependencies */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { logger } from 'redux-logger';
import history from 'helpers/history';
import rootReducer from './reducers';

const reduxRouterMiddleware = routerMiddleware(history);
const middlewares = [thunk, reduxRouterMiddleware];

const initialState = {};
let devTools = applyMiddleware(...middlewares);
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
  // middlewares.push(reduxImmutableStateInvariant());
  devTools = composeWithDevTools(applyMiddleware(...middlewares));
}

const store = createStore(rootReducer, initialState, devTools);

export default store;
