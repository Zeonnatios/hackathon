import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerReducer } from 'react-router-redux';
import { persistStore } from 'redux-persist';
import persistRootReducer from './persistor';
import reducers from './modules';
// eslint-disable-next-line
import rootSaga from './sagas';

// Initialize the Redux set up
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistRootReducer(
  combineReducers({ ...reducers, routing: routerReducer }),
);
const store = createStore(
  persistedReducer,
  undefined,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

const persistor = persistStore(store);

// Run the saga now
sagaMiddleware.run(rootSaga);

export { persistor, store, store as default };
