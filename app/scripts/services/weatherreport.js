'use strict';

angular.module('weatherReportServices', ['ngResource'])
.factory('WeatherReport', function ($resource) {

    //delete $http.defaults.headers.common['X-Requested-With'];
    return $resource(
        'http://api.worldweatheronline.com/free/v1/weather.ashx'
            +'?key=:key'
            +'&q=:query'
            +'&date=:date'
            +'&num_of_days=:num_of_days'
            +'&fx=:fx'
            +'&cc=:cc'
            +'&format=json',
        {
            query:'Paris',
            date:'today',
            num_of_days:0,
            fx:'no',
            cc:'yes'
        },
        {
            'report': {method:'JSONP', isArray:true}
        }
    );
});
