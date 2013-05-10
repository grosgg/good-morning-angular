'use strict';

angular.module('bookmarkServices', ['ngResource', 'ngCookies'])
.factory('Bookmark', function ($resource, $cookieStore) {

    return $resource(
        backendUrl+'bookmarks.json?authentication_token=:authToken',
        {},
        {}
    );
});
