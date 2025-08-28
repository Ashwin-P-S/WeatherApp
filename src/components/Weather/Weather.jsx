import React from 'react';
import { useDispatch } from 'react-redux';

import WeatherContent from './WeatherContent';
import { 
    SET_ERROR,
    CLEAR_STORE, 
    FETCH_WEATHER_REQUEST,
    FETCH_WEATHER_REQUEST_LOCATION
} from '../../constants/actionTypes';
import InputControl from '../InputControl/InputControl';


const Weather = () => {
    const dispatch = useDispatch();

    const getCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                dispatch({
                    type: FETCH_WEATHER_REQUEST_LOCATION,
                    payload: { 
                        lat: position.coords.latitude, 
                        lon: position.coords.longitude
                    }
                });
            }, () => {
                dispatch({
                    type: SET_ERROR,
                    payload: {
                        message: "Warning: Location is disabled!"
                    }
                });
            });
        }
    }

    const getWeather = (event) => {
        event.preventDefault();
        const location = document.getElementById("location").value;
        if (!location) {
            dispatch({
                type: SET_ERROR,
                payload: {
                    message: "Warning: Please enter location"
                }
            });
        } else {
            dispatch({
                type: FETCH_WEATHER_REQUEST,
                payload: {
                    city: location,
                }
            });
        }
    };

    const clearData = () => {
        dispatch({ type: CLEAR_STORE });
        document.getElementById("location").value = null;
    };

    return (
        <>
            <InputControl
                getWeather={getWeather}
                getCurrentLocation={getCurrentLocation}
                clearData={clearData}
            />
            <WeatherContent/>
        </>
    );
};

export default Weather;