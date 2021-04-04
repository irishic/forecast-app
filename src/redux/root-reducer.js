import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import { forecastReducer } from './forecast/forecast.reducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage
};

export const rootReducer = combineReducers({
  forecast: forecastReducer
});

export default persistReducer(persistConfig, rootReducer);