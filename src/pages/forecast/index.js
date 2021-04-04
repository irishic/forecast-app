import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { ErrorIndictor } from '../../components/error-indicator';
import { Search } from '../../components/search';
import { WeatherList } from '../../components/weather-list';
import { ERROR_BODY, ERROR_BODY_NOT_FOUND, ERROR_HEAD, ERROR_HEAD_NOT_FOUND } from '../../constants';
import { retrieveForecast, setCurrentSearch, setForecast } from '../../redux/forecast/forecast.actions';
import { ForecastWrapper } from './forecast.sc';

export const Forecast = () => {
  const { cityName } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const forecast = useSelector(state => state.forecast.data);
  const forecastError = useSelector(state => state.forecast.error);
  const isNotFoundError = forecastError && forecastError.status === 404;
  const clearForecastState = () => dispatch(setForecast(null));

  useEffect(() => {
    if(!cityName) {
      return clearForecastState();
    }
    dispatch(retrieveForecast(cityName));
  }, [cityName]);

  useEffect(() => {
    if(!forecastError) return;
    history.push('/forecast');
  }, [forecastError]);

  const applySearch = cityName => {
    dispatch(setCurrentSearch(cityName));
    history.push(`/forecast/${cityName}`);
  };

  return <ForecastWrapper>
    <>
      <Search onSearch={applySearch} />
      {
        forecastError ?
          (isNotFoundError ?
            <ErrorIndictor header={ERROR_HEAD_NOT_FOUND} body={ERROR_BODY_NOT_FOUND} /> :
            <ErrorIndictor header={ERROR_HEAD} body={ERROR_BODY} />)
        :
        forecast ?
          Object.entries(forecast).map(([key, day]) => <WeatherList key={key} date={key} data={day} />) :
          ''
      }
    </>
  </ForecastWrapper>;
};