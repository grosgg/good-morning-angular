'use strict';

angular.module('stickyServices', ['ngResource'])
.factory('StickyBoard', function ($resource) {
    return $resource(
        'http://www.velib.paris.fr/service/stationdetails/paris/:stationId'
            + '?callback=JSON_CALLBACK',
        {
            stationId:13002
        },
        {
            'pull': {method:'JSONP'}
        }
    );
});
