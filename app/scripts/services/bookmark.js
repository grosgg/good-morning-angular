'use strict';

angular.module('bookmarkServices', ['ngResource'])
.factory('Bookmark', function ($resource) {
    return $resource('resources/bookmark.json', {}, {
        query: {method:'GET', params:{}, isArray:true}
    });
});
