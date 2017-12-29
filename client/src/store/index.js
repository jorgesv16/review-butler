import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { logger } from 'redux-logger';

import DevTools from '../DevTools.jsx';
import ProgressReducer from '../reducers/progress';
import AuthenticationReducer from '../reducers/authentication';

const combinedReducers = combineReducers({
  progress: ProgressReducer,
  authentication: AuthenticationReducer,
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
