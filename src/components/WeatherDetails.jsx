import React from 'react';

const WeatherDetails = ({ weather }) => {
    let icon = "http://openweathermap.org/img/wn/" + weather.iconId + "@2x.png";

    const titleCase = (str) =>
        str.toLowerCase().replace(/\b\w/g, (s) => s.toUpperCase());

    return (
        <div className="output">
            <div>
                <p id="locate">{titleCase(weather.location)}</p>
                <p id="country">{weather.country}</p>
                <p id="description">{titleCase(weather.description)}</p>
                <p id="temperature">
                    <img src={icon} height="125" widht="125" alt='weather_icon' />
                    <br />
                    {weather.temperature + "°C"}
                </p>
                <p id="feels_like">
                    {"Feels Like " + weather.feelsLike + "°C"}
                </p>
                <p id="humidity">
                    {"Humidity : " + weather.humidity + " %"}
                </p>
                <p id="windSpeed">
                    {"Wind Speed : " + weather.windSpeed + " m/s"}
                </p>
                <p id="pressure">
                    {"Pressure : " + weather.pressure + " hPa"}
                </p>
                <p id="visibility">
                    {"Visibility : " + weather.visibility + " Km"}
                </p>
            </div>
        </div>
    );
}

export default WeatherDetails;