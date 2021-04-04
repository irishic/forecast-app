import React from 'react';
import PropTypes from 'prop-types';
import { FORECAST_ICON_LINK } from '../../api/constants';
import { 
  ForecastPreviewWrapper,
  Tile,
  TileContent,
  ForecastDescriptionWrapper,
  ForecastDateWrapper
} from './weather-tile.sc';

export const WeatherTile = ({dt_txt, wind, weather, main}) => {
  return <Tile className="message is-info">
    <TileContent className='message-body'>
      <ForecastPreview icon={weather[0].icon} temp={main.temp} feelsLike={main.feels_like} />
      <ForecastDate textDate={dt_txt} />
      <ForecastDescription
        speed={wind.speed}
        description={weather[0].description}
        humidity={main.humidity}
        pressure={main.pressure}
      />
    </TileContent>
  </Tile>;
};

const ForecastPreview = ({icon, temp, feelsLike}) => <ForecastPreviewWrapper>
  <img src={`${FORECAST_ICON_LINK}/${icon}.png`} />
  <p className='tile-temp'>{temp} °C</p>
  <p className='tile-feels-like'>Feels like: {feelsLike} °C</p>
</ForecastPreviewWrapper>;

const ForecastDate = ({textDate}) => <ForecastDateWrapper className='has-text-info-light'>
  <div>
    {new Date(textDate).toLocaleTimeString()}
  </div>
</ForecastDateWrapper>;

export const ForecastDescription = ({speed, description, humidity, pressure}) => <ForecastDescriptionWrapper>
  <p>wind speed: <span>{speed} meter/sec</span></p>
  <p><span>{description}</span></p>
  <p>humidity: <span>{humidity}%</span></p>
  <p>pressure: <span>{pressure}%</span></p>
</ForecastDescriptionWrapper>;

WeatherTile.propTypes = {
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
};


ForecastPreview.propTypes = {
  icon: PropTypes.string,
  temp: PropTypes.number,
  feelsLike: PropTypes.number
};

ForecastDate.propTypes = {
  textDate: PropTypes.string
};

ForecastDescription.propTypes = {
  speed: PropTypes.number,
  description: PropTypes.string,
  humidity: PropTypes.number,
  pressure: PropTypes.number
};