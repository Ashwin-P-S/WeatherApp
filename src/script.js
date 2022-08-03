
let fetchApi = async (url, location) => {

    var temperature, humidity, description, windSpeed;

    await fetch(url)
    .then((response) => { 

        if (response.ok) return response.json()
    })
    .then((data) => {
        
        temperature = (data["main"]["temp"]-273.15).toPrecision(4)
        humidity = data["main"]["humidity"]
        description = data["weather"][0]["description"]
        windSpeed = data["wind"]["speed"]

        showData(temperature, humidity, description, windSpeed, location)

    })
    .catch(() => {

        alert("Please Enter Valid Location!");
        clearData()
    })

}

let getWeather = () => {

    var location = document.getElementById('location').value;
    
    let apiKey = '63fcf6ac9a00124665e8461cfe2370bb'

    let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=' + apiKey;

    if (location === "") {

        alert("Please Enter Location!")
        clearData()
    } else {
        fetchApi(url, location)
    }

}

let titleCase = (str) => {
    return str.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
}

let clearData = () => {

    document.getElementById('location').value = null
    document.getElementById('locate').innerHTML = null
    document.getElementById('temperature').innerHTML = null
    document.getElementById('description').innerHTML = null
    document.getElementById('humidity').innerHTML = null
    document.getElementById('windSpeed').innerHTML = null

}

let showData = (temperature, humidity, description, windSpeed, location) => {

    document.getElementById('locate').innerHTML = titleCase(location)
    document.getElementById('temperature').innerHTML = "Temperature : " + temperature + " °C"
    document.getElementById('description').innerHTML = titleCase(description)
    document.getElementById('humidity').innerHTML = "Humidity : " + humidity + " %"
    document.getElementById('windSpeed').innerHTML = "Wind Speed : " + windSpeed + " m/s"

}

