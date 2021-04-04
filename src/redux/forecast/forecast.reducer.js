import { SET_FORECAST, SET_FORECAST_LOAD_ERROR, SET_IS_LOADING, SET_CURRENT_SEARCH } from './forecast.types';

const INITIAL_STATE = {
  data: null,
  isLoading: false,
  error: null,
  currentSearch: null
};

export const forecastReducer = (state = INITIAL_STATE, action) => {
  const {type, payload} = action;
  switch(type) {
    case SET_FORECAST:
      return {
        ...state,
        data: payload
      };
    case SET_CURRENT_SEARCH:
      return {
        ...state,
        currentSearch: payload
      };
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: payload
      };
    case SET_FORECAST_LOAD_ERROR:
      return {
        ...state,
        error: payload
      };
    default:
      return {
        ...state
      };
  }
};