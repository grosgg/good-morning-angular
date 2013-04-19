'use strict';

angular.module('authServices', ['ngResource'])
.factory('Auth', function ($resource, $cookieStore) {
    var token = $cookieStore.get('authToken');
    return $resource(
        'http://localhost\\:3000/users/:action.json?authentication_token=:auth_token',
        {},
        {
            'signin': {method:'POST', params: {action:'sign_in'}},
            'signout': {method:'DELETE', params: {action:'sign_out', auth_token:token}}
        }
    );
});
