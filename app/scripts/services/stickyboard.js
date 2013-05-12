'use strict';

angular.module('stickyServices', ['ngResource', 'ngCookies'])
.factory('StickyBoard', function ($resource, $cookieStore) {
    return $resource(
        backendUrl+'stickyboards/:stickyId.json?authentication_token=:authToken',
        {
            stickyId:1
        },
        {
            'push': {method:'PUT'},
            'pull': {method:'GET'}
        }
    );
});
