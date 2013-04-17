'use strict';

angular.module('authServices', ['ngResource'])
.factory('Auth', function ($resource) {
    return $resource(
        'http://localhost\\:3000/users/:action.json',
        {},
        {
            'signin': {method:'POST', params: {action:'sign_in'}},
            'signout': {method:'DELETE', params: {action:'sign_out'}}
        }
    );
});
