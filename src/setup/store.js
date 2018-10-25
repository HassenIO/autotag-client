import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import freeze from 'redux-freeze';
import reducers from '../reducers';

const middlewares = [logger];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(freeze);
}

const store = createStore(
  reducers,
  compose(
    applyMiddleware(...middlewares),
    process.env.NODE_ENV === 'development' &&
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export { store };
