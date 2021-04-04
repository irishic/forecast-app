import { createStore, applyMiddleware } from 'redux';
import persistStore from 'redux-persist/es/persistStore';
import thunk from 'redux-thunk';
import rootReducer from './root-reducer';

const middlewares = [];
middlewares.push(thunk);

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistedStore = persistStore(store);