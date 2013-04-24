'use strict';

angular.module('weatherReportServices', ['ngResource'])
.factory('WeatherReport', function ($resource) {

    /**** Disable WorldWeatherOnline API
    return $resource(
        'http://api.worldweatheronline.com/free/v1/weather.ashx'
            +'?key=:key'
            +'&q=:query'
            +'&date=:date'
            +'&num_of_days=:num_of_days'
            +'&fx=:fx'
            +'&cc=:cc'
            +'&format=json'
            +'&callback=JSON_CALLBACK',
        {
            query:'Paris',
            date:'today',
            num_of_days:0,
            fx:'no',
            cc:'yes'
        },
        {
            'report': {method:'JSONP', isArray:false}
        }
    );
    ****/

    return $resource(
        'http://api.wunderground.com/api/:key/:mode/q/:country/:town.json'
            +'?callback=JSON_CALLBACK',
        {
            mode:'conditions',
            country:'France',
            town:'Paris'
        },
        {
            'conditions': {method:'JSONP', params:{mode:'conditions'}, isArray:false},
            'astronomy': {method:'JSONP', params:{mode:'astronomy'}, isArray:false}
        }
    );
});
