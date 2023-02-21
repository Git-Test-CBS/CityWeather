let dataService = {
    getCityWeather(cityName){
        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=7102b73c1a4e874f418433dc5c3c65a5&units=metric`)
        .then(function(resObj){
            return resObj.json()
        })
        .then(function(result){
            return result
        })
    },

    getCityForecast(cityName){
        return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=7102b73c1a4e874f418433dc5c3c65a5&units=metric`)
        .then(function(resObj){
            return resObj.json()
        })
        .then(function(result){
            return result
        })
    }


}