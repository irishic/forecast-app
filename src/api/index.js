import axios from 'axios';
import { FORECAST_API_LINK } from './constants';

const getCityForecastUrl = cityName => `${FORECAST_API_LINK}?appid=${process.env.REACT_APP_APP_ID}&q=${cityName}&units=metric`;

export const getForecastByCity = cityName => axios.get(getCityForecastUrl(cityName));