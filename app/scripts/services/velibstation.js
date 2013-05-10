'use strict';

angular.module('velibstationServices', ['ngResource'])
.factory('VelibStation', function ($resource) {

    return $resource(
        backendUrl+'velibstations.json?authentication_token=:authToken',
        {},
        {}
    );
});
