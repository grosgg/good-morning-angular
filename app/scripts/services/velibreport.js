'use strict';

angular.module('velibreportServices', ['ngResource'])
.factory('VelibReport', function ($resource) {

    // Load x2js lib
    var x2js = new X2JS();

    return $resource(
        'http://www.velib.paris.fr/service/stationdetails/paris/:stationId'
            + '?callback=JSON_CALLBACK',
        {
            stationId:13002
        },
        {
            'get': {
                method:'JSONP',
                config: {
                    transformResponse : function(data) {
                        console.log('vr: '+data);
                        var json = x2js.xml_str2json(data);
                        return json;
                    }
                }
            }
        }
    );
});
