import { getForecastByCity } from '../../api';
import { divideForecastsByDate } from '../../utils';
import { SET_CURRENT_SEARCH, SET_FORECAST, SET_FORECAST_LOAD_ERROR, SET_IS_LOADING } from './forecast.types';

export const setForecast = payload => ({
  type: SET_FORECAST,
  payload
});

export const setCurrentSearch = payload => ({
  type: SET_CURRENT_SEARCH,
  payload
});

export const setForecastLoadError = payload => ({
  type: SET_FORECAST_LOAD_ERROR,
  payload
});

export const startLoading = () => ({
  type: SET_IS_LOADING,
  payload: true
});

export const endLoading = () => ({
  type: SET_IS_LOADING,
  payload: false
});

export const retrieveForecast = cityName => {
  return (dispatch) => {
    dispatch(startLoading());
    return getForecastByCity(cityName)
      .then(({data}) => {
        const dividedByDate = divideForecastsByDate(data.list, 'dt_txt');

        dispatch(setForecastLoadError(null));
        dispatch(setForecast(dividedByDate));
      })
      .catch(({response}) => {
        response ?
          dispatch(setForecastLoadError(response)) :
          dispatch(setForecastLoadError({status: 500, message: 'unexpected error'}));
      })
      .finally(() => {
        dispatch(endLoading());
        dispatch(setCurrentSearch());
      });
  };
};