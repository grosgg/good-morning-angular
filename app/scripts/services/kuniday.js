'use strict';

angular.module('kunidayServices', ['ngResource'])
.factory('KuniDay', function ($resource) {

    return $resource(
        backendUrl+'kunidays.json?authentication_token=:authToken',
        {
        },
        {
            'query': {method:'GET', params:{}, isArray:false},
            'save': {method:'POST', params:{}, isArray:false}
        }
    );
})

.factory('KuniDaySingle', function ($resource) {

    var now = new Date();
    var d = now.getFullYear() +'-'+ ('0'+(now.getMonth()+1)).slice(-2) +'-'+ ('0'+now.getDate()).slice(-2);

    return $resource(
        backendUrl+'kunidays/:date.json?authentication_token=:authToken',
        {
        },
        {
            'today': {method:'GET', params:{date:d}, isArray:false},
        }
    );
});
