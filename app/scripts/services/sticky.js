'use strict';

angular.module('stickyServices', ['ngResource', 'ngCookies'])
.factory('StickyBoard', function ($resource, $cookieStore) {
    var token = $cookieStore.get('authToken');
    return $resource(
        'http://localhost\\:3000/stickyboards/:stickyId.json?authentication_token=:authToken',
        {
            stickyId:1,
            authToken:token
        },
        {
            'push': {method:'PUT'},
            'pull': {method:'GET'}
        }
    );
});
