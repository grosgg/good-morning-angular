'use strict';

angular.module('weatherreportServices', ['ngResource'])
.factory('WeatherReport', function ($resource) {

    return $resource(
        backendUrl+'weatherreports.json?authentication_token=:authToken',
        {
        },
        {
            'query': {method:'GET', params:{}, isArray:false}
        }
    );
});
