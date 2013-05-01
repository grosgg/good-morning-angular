'use strict';

angular.module('kunidayServices', ['ngResource'])
.factory('KuniDay', function ($resource) {

    return $resource(
        'http://localhost\\:3000/kunidays.json?authentication_token=:authToken',
        {
        },
        {
            'query': {method:'GET', params:{}, isArray:false}
        }
    );
});
