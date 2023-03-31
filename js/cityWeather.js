class cityWeather {
    constructor(cityObject, forecastElem){
        this.forecastElem = forecastElem;
        this.cityObject = cityObject
    }

    createCityWeather(weatherElement){
        let cityElement = document.createElement("div");
        cityElement.className = "cityBlock";
        cityElement.insertAdjacentHTML("beforeend",`<p>${this.cityObject.name}</p>`);
        cityElement.insertAdjacentHTML("beforeend",`<p>${Math.round(this.cityObject.main.temp)} C</p>`);
        cityElement.insertAdjacentHTML("beforeend",`<p>${this.cityObject.weather[0].description}</p>`);
        cityElement.insertAdjacentHTML("beforeend",`<img src="http://openweathermap.org/img/wn/${this.cityObject.weather[0].icon}@2x.png">`);
        cityElement.insertAdjacentHTML("beforeend",`<button class="forecast_btn">Forecast</button>`);
        weatherElement.append(cityElement);

        this.addButtonEvent(cityElement)
    }

    addButtonEvent(cityElement){
        let forecastBtn = cityElement.querySelector(".forecast_btn");
        let forecastElem = this.forecastElem;
        let cityName = this.cityObject.name;

        forecastBtn.addEventListener("click",function(){
            let forecastObject = new cityForecast(cityName, forecastElem);
            forecastObject.createCityForecast()
        })
    }
}