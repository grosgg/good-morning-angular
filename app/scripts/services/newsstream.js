'use strict';

angular.module('newsstreamServices', ['ngResource'])
.factory('NewsStream', function ($resource) {

    return $resource(
        backendUrl+'newsstreams.json?authentication_token=:authToken',
        {},
        {
            'create': {method:'POST'}
        }
    );
})


.factory('NewsStreamSingle', function ($resource) {
    return $resource(
        backendUrl+'newsstreams/:id.json?authentication_token=:authToken',
        {},
        {
            'update': {method:'PUT'}
        }
    );
});
