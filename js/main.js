let weatherContainer = document.querySelector("#weatherContainer");
let forecastContainer = document.querySelector("#forecastContainer");

let cities = ["Kyiv","London","New York"]

let weatherList = new WeatherList(weatherContainer, cities, forecastContainer);

weatherList.showWeather()

