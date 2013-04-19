'use strict';

angular.module('authServices', ['ngResource'])
.factory('Auth', function ($resource, $cookieStore) {
    return $resource(
        'http://localhost\\:3000/users/:action.json?authentication_token=:authToken',
        {},
        {
            'signin': {method:'POST', params: {action:'sign_in'}},
            'signout': {method:'DELETE', params: {action:'sign_out'}}
        }
    );
});
