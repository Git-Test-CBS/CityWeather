class cityForecast {
    constructor(cityName, forecastElement){
        this.cityName = cityName;
        this.forecastElement = forecastElement;
    }

    createCityForecast(){
        dataService.getCityForecast(this.cityName)
        .then(result =>{
            this.#drawTable(result)
        })
    }

    #drawTable(resObj){

        this.forecastElement.innerHTML = "";
        let table = document.createElement("table");

        let forecastList = resObj.list;

        let finalList = forecastList.filter(forecast => {
            let date = new Date(forecast.dt * 1000);
            return date.getHours() >= 12 && date.getHours() < 15;
        })
        
        finalList.forEach(data=>{
            let date = new Date(data.dt*1000);
            let tr = document.createElement("tr");
            tr.insertAdjacentHTML("beforeend",`<td>${Math.round(data.main.temp)} C</td>`);
            tr.insertAdjacentHTML("beforeend",`<td>${data.weather[0].description}</td>`);
            tr.insertAdjacentHTML("beforeend",`<td> <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"></td>`);
            tr.insertAdjacentHTML("beforeend",`<td>${date.getDate()}.${date.getMonth() + 1}  ${date.getHours()}:${date.getMinutes()}</td>`);
            table.append(tr)
        })

        this.forecastElement.append(table)
    }

}