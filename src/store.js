import { createStore, compose, applyMiddleware } from 'redux';
import { promiseMiddleware } from 'promise-middleware-redux';
import reducer from './reducers/index';

export const store = createStore(reducer,
  compose(
    applyMiddleware(promiseMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);
