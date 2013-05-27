'use strict';

goodMorningAngularApp.controller("NewsCtrl", function($scope, $cookieStore, NewsStream, NewsStreamSingle) {

    // Get backend token from cache
    var token = $cookieStore.get('authToken');

    $scope.news = NewsStream.query({authToken:token});

    $scope.removeStream = function(streamId){
        token = $cookieStore.get('authToken');
        var response = NewsStreamSingle.remove({authToken:token, id:streamId});
        $scope.news = NewsStream.query({authToken:token});
    }

});

