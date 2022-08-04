
const fetchApi = async (url, location) => {

    var temperature, humidity, description, windSpeed;

    await fetch(url)
    .then((response) => { 

        if (response.ok) return response.json();
    })
    .then((data) => {
        
        temperature = (data["main"]["temp"]-273.15).toPrecision(4);
        feelsLike = (data["main"]["feels_like"]-273.15).toPrecision(4);
        country = data["sys"]["country"]

        humidity = data["main"]["humidity"];
        description = data["weather"][0]["description"];
        windSpeed = data["wind"]["speed"];
        pressure = data["main"]["pressure"];
        visibility = (data["visibility"])/1000;

        showData(country, temperature, feelsLike,  humidity, description, windSpeed, location, pressure, visibility);

    })
    .catch(() => {

        catchError("Error: City not found");
    });

}

const getWeather = () => {

    var location = document.getElementById('location').value;
    
    let apiKey = '63fcf6ac9a00124665e8461cfe2370bb';

    let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=' + apiKey;

    location === "" ? catchError("Warning: please enter location") : fetchApi(url, location);

}

const titleCase = (str) => {

    return str.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
}

const catchError = (errorMsg) => {

    clearData();
    document.getElementById('description').innerHTML = errorMsg;
}

const clearData = () => {

    document.getElementById('location').value = null;
    document.getElementById('locate').innerHTML = null;
    document.getElementById('country').innerHTML = null;
    document.getElementById('temperature').innerHTML = null;
    document.getElementById('description').innerHTML = null;
    document.getElementById('humidity').innerHTML = null;
    document.getElementById('windSpeed').innerHTML = null;
    document.getElementById('feels_like').innerHTML = null;
    document.getElementById('pressure').innerHTML = null;
    document.getElementById('visibility').innerHTML = null;
}

const showData = (country, temperature, feelsLike, humidity, description, windSpeed, location, pressure, visibility) => {

    document.getElementById('locate').innerHTML = titleCase(location);
    document.getElementById('country').innerHTML = country
    document.getElementById('description').innerHTML = titleCase(description);
    document.getElementById('temperature').innerHTML = temperature + " °C";
    document.getElementById('feels_like').innerHTML = "Feels Like : " + feelsLike + " °C";
    document.getElementById('humidity').innerHTML = "Humidity : " + humidity + " %";
    document.getElementById('windSpeed').innerHTML = "Wind Speed : " + windSpeed + " m/s";
    document.getElementById('pressure').innerHTML = "Pressure : " + pressure + " hPa";
    document.getElementById('visibility').innerHTML = "Visibility : " + visibility + " Km";
}

const setCurrentYear = () => {

    const year = new Date().getFullYear();
    document.getElementById("cpy").innerHTML = year;
}