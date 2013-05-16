'use strict';

angular.module('weatherreportServices', ['ngResource'])
.factory('WeatherReport', function ($resource) {

    return $resource(
        backendUrl+'weatherreports/:action.json?authentication_token=:authToken',
        {
        },
        {
            'home': {method:'GET', params:{action: 'home'}, isArray:false},
            'full': {method:'GET', params:{action: 'full'}, isArray:false}
        }
    );
});
