'use strict';

angular.module('stickyServices', ['ngResource'])
.factory('StickyBoard', function ($resource, $cookieStore) {
    var token = $cookieStore.get('authToken');
    return $resource(
        'http://localhost\\:3000/stickyboards/:stickyId.json?authentication_token=:authToken',
        {stickyId:1, authToken:token },
        {}
    );
});
