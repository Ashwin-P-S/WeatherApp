import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import WeatherDetails from './WeatherDetails';

const WeatherContent = () => {
  const loading = useSelector(state => state.weatherDetailsReducer.loading);
  const error = useSelector(state => state.weatherDetailsReducer.error);
  const weather = useSelector(state => state.weatherDetailsReducer.weather);

  const [weatherDetails, setWeatherDetails] = useState({});

  useEffect(() => {
    if (weather) {
      let temperature = (weather["main"]["temp"] - 273.15).toPrecision(2);
      let feelsLike = (weather["main"]["feels_like"] - 273.15).toPrecision(4);

      let location = weather["name"];
      let country = weather["sys"]["country"];

      let humidity = weather["main"]["humidity"];
      let description = weather["weather"][0]["description"];
      let windSpeed = weather["wind"]["speed"];
      let pressure = weather["main"]["pressure"];
      let visibility = weather["visibility"] / 1000;

      let iconId = weather["weather"][0]["icon"].slice(0, -1) + "n";

      setWeatherDetails({
        country,
        iconId,
        temperature,
        feelsLike,
        humidity,
        description,
        windSpeed,
        location,
        pressure,
        visibility
      });
    }
  }, [weather]);

  if (loading) return <Loader />;
  if (error && error.message) return <ErrorMessage errorMsg={error.message} />;
  if (weather) return <WeatherDetails weather={weatherDetails} />;
  return null;
};

export default WeatherContent;
