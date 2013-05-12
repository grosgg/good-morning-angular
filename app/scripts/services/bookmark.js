'use strict';

angular.module('bookmarkServices', ['ngResource', 'ngCookies'])
.factory('Bookmark', function ($resource, $cookieStore) {

    return $resource(
        backendUrl+'bookmarks.json?authentication_token=:authToken',
        {},
        {
            'create': {method:'POST'}
        }
    );
})

.factory('BookmarkSingle', function ($resource) {
    return $resource(
        backendUrl+'bookmarks/:id.json?authentication_token=:authToken',
        {},
        {
            'update': {method:'PUT'}
        }
    );
});
