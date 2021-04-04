import React from 'react';
import PropTypes from 'prop-types';
import { WeatherTile } from '../weather-tile';
import { WeatherListDate, WeatherListWrapper } from './weather-list.sc';

export const WeatherList = ({data, date}) => {
  return <>
    <WeatherListDate>{date}</WeatherListDate>
    <WeatherListWrapper className='has-background-info-light'>
      {data.map(weatherInfo => <WeatherTile key={weatherInfo.dt} {...weatherInfo} />)}
    </WeatherListWrapper>
  </>;
};

WeatherList.propTypes = {
  date: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape({
    dt: PropTypes.number,
    main: PropTypes.shape({
      temp: PropTypes.number,
      feels_like: PropTypes.number,
      temp_min: PropTypes.number,
      temp_max: PropTypes.number,
      pressure: PropTypes.number,
      sea_level: PropTypes.number,
      grnd_level: PropTypes.number,
      humidity: PropTypes.number,
      temp_kf: PropTypes.number
    }),
    weather: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      main: PropTypes.string,
      description: PropTypes.string,
      icon: PropTypes.string
    })),
    wind: PropTypes.shape({
      speed: PropTypes.number,
      deg: PropTypes.number
    }),
    visibility: PropTypes.number,
    dt_txt: PropTypes.string
  }))
};