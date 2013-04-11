'use strict';

angular.module('weatherServices', ['ngResource'])
.factory('weather', function ($resource) {
    return $resource('resources/sticky.json', {}, {
        query: {method:'GET', params:{}}
    });
});
