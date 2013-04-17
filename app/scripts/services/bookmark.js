'use strict';

angular.module('bookmarkServices', ['ngResource', 'ngCookies'])
.factory('Bookmark', function ($resource, $cookieStore) {
    var token = $cookieStore.get('authToken');
    return $resource(
        'http://localhost\\:3000/bookmarks.json?authentication_token=:authToken',
        {authToken:token},
        {}
    );
});
