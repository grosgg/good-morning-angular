'use strict';

angular.module('velibreportServices', ['ngResource'])
.factory('VelibReport', ['$http',function($http){

    // Load x2js lib
    var x2js = new X2JS();

    return {
        get: function(callback, authToken, stationId){
            $http.get(
                'http://localhost:3000/velibreports/'
                +stationId+'.json?authentication_token='+authToken,
                {
                    transformResponse : function(data) {
                        var json = x2js.xml_str2json(data);
                        console.log('vr: '+json);
                        return json;
                    }
                }
            ).
            success(function(data, status) {
                callback(data);
            })
        }
    }
}]);
