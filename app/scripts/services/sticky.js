'use strict';

angular.module('stickyServices', ['ngResource'])
.factory('StickyBoard', function ($resource) {
    return $resource('resources/sticky.json', {}, {
        query: {method:'GET', params:{}}
    });
});
