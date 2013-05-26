'use strict';

angular.module('newsstreamServices', ['ngResource'])
.factory('NewsStream', function ($resource) {

    return $resource(
        backendUrl+'newsstreams.json?authentication_token=:authToken',
        {},
        {}
    );
});
