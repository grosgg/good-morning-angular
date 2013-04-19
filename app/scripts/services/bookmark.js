'use strict';

angular.module('bookmarkServices', ['ngResource', 'ngCookies'])
.factory('Bookmark', function ($resource, $cookieStore) {

    return $resource(
        'http://localhost\\:3000/bookmarks.json?authentication_token=:authToken',
        {},
        {}
    );
});
