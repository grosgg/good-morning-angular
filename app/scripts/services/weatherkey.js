'use strict';

angular.module('weatherKeyServices', ['ngResource'])
.factory('WeatherKey', function ($resource) {

    return $resource(
        'http://localhost\\:3000/weatherkeys.json?authentication_token=:authToken',
        {},
        {}
    );
});
