'use strict';

goodMorningAngularApp.controller("NewsCtrl", function($scope, $cookieStore, NewsStream) {

    // Get backend token from cache
    var token = $cookieStore.get('authToken');

    $scope.news = NewsStream.query({authToken:token});
});

