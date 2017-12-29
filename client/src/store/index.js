import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { logger } from 'redux-logger';

import DevTools from '../DevTools.jsx';
import ProgressReducer from '../reducers/progress.js';

const combinedReducers = combineReducers({
  progress: ProgressReducer,
});

const enhancer = compose(
  applyMiddleware(logger),
  DevTools.instrument(),
);

const Store = createStore(combinedReducers);

export default Store;


// export default function configureStore(initialState) {
//   const store = createStore(combinedReducers, initialState, enhancer);
//
//   // Hot reload reducers
//   if (module.hot) {
//     module.hot.accept('../reducers/progress', () =>
//       store.replaceReducer(ProgressReducer),
//     );
//   }
//
//   return store;
// }
