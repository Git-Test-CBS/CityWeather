class WeatherList{
    constructor(wElem, cities, fElem){
        this.wElem = wElem;
        this.cities = cities;
        this.fElem = fElem;       
    }

    showWeather(){

        let promiseAray = [];

        this.cities.forEach(function(city){
            let cityPromise = dataService.getCityWeather(city);
            promiseAray.push(cityPromise)           
        })        

        Promise.all(promiseAray).then(citiesInfo => {           
            this.drawList(citiesInfo)
        })
    }

    drawList(citiesInfo){
        citiesInfo.forEach(cityInfo =>{
            let cityObject = new cityWeather(cityInfo, this.fElem);
            cityObject.createCityWeather(this.wElem)

        })

    }


}