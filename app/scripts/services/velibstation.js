'use strict';

angular.module('velibstationServices', ['ngResource'])
.factory('VelibStation', function ($resource) {

    return $resource(
        'http://localhost\\:3000/velibstations.json?authentication_token=:authToken',
        {},
        {}
    );
});
