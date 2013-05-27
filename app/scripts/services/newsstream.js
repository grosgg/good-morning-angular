'use strict';

angular.module('newsstreamServices', ['ngResource'])
.factory('NewsStream', function ($resource) {

    return $resource(
        backendUrl+'newsstreams.json?authentication_token=:authToken',
        {},
        {}
    );
})


.factory('NewsStreamSingle', function ($resource) {
    return $resource(
        backendUrl+'newsstreams/:id.json?authentication_token=:authToken',
        {},
        {}
    );
});
