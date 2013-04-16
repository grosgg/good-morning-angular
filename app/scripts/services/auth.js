'use strict';

angular.module('authServices', ['ngResource'])
.factory('Auth', function ($resource) {
    return $resource(
        'http://localhost\\:3000/:action.json',
        {},
        {
            'signin': {method:'POST', {action:'sign_in'}, {isArray:false},
            'signout': {method:'DELETE', {action:'sign_out'}, {isArray:false}
        }
    );
});
