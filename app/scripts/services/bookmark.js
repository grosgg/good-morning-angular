'use strict';

angular.module('bookmarkServices', ['ngResource'])
.factory('Bookmark', function ($resource) {
    return $resource('http://localhost:3000\:3000/bookmarks.json?authentication_token=bidon', {}, {
        query: {method:'GET', params:{}, isArray:true}
    });
});
