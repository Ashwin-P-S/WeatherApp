import React from 'react';
import axios from 'axios';
import { useState } from 'react';

import ErrorMessage from './ErrorMessage';
import WeatherDetails from './WeatherDetails';

const Weather = () => {

    const apiKey = "63fcf6ac9a00124665e8461cfe2370bb";
    const [weather, setWeather] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const getCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;

                let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
                
                fetchApi(url);
            }, () => catchError("Warning: Location is disabled!"));
        }
    }

    const getWeather = (event) => {
        event.preventDefault();

        const location = document.getElementById("location").value;

        let url = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=" + apiKey;

        (location === "")
            ? catchError("Warning: please enter location")
            : fetchApi(url);
    };

    const fetchApi = async (url) => {
        setErrorMsg('');
        await axios.get(url)
            .then((response) => response.data)
            .then((data) => fetchDetails(data))
            .catch(() => catchError("Error: City not found"));
    };

    const fetchDetails = (data) => {

        let temperature = (data["main"]["temp"] - 273.15).toPrecision(2);
        let feelsLike = (data["main"]["feels_like"] - 273.15).toPrecision(4);

        let location = data["name"];
        let country = data["sys"]["country"];

        let humidity = data["main"]["humidity"];
        let description = data["weather"][0]["description"];
        let windSpeed = data["wind"]["speed"];
        let pressure = data["main"]["pressure"];
        let visibility = data["visibility"] / 1000;

        let iconId = data["weather"][0]["icon"].slice(0, -1) + "n";

        let weather = {
            "country": country,
            "iconId": iconId,
            "temperature": temperature,
            "feelsLike": feelsLike,
            "humidity": humidity,
            "description": description,
            "windSpeed": windSpeed,
            "location": location,
            "pressure": pressure,
            "visibility": visibility,
        }

        setWeather(weather);
    };

    const catchError = (errorMsg) => {
        clearData();
        setErrorMsg(errorMsg);
    };

    const clearData = () => {
        document.getElementById("location").value = null;
        setErrorMsg('');
        setWeather('');
    };

    return (
        <div>
            <div className='input'>
                <form className="input" onSubmit={getWeather}>
                    <input
                        id="location"
                        type="text"
                        placeholder="Location"
                        autoComplete="off"
                    />
                </form>
            </div>

            <div className="btn">
                <input type="submit" value="Search" onClick={getWeather} />
                <input type="button" value="Clear" onClick={clearData} />
                <button className="material-symbols-outlined" onClick={getCurrentLocation}>
                    location_on
                </button>
            </div>

            {(weather !== '') && <WeatherDetails weather={weather} />}
            {(errorMsg !== '') && <ErrorMessage errorMsg={errorMsg} />}
        </div >
    );
};

export default Weather;