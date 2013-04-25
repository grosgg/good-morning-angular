'use strict';

goodMorningAngularApp.controller("MainCtrl", function($scope, $cookieStore, StickyBoard, Bookmark, WeatherReport, VelibStation) {

    // Get backend token and weather key from cache
    var token = $cookieStore.get('authToken');
    var key = $cookieStore.get('weatherKey');
    //console.log('cookie before fetching: '+token);

    // Figure current time
    var now = new Date();
    $scope.hours = now.getHours();

    // Init bookmarks
    $scope.bookmarks = Bookmark.query({authToken:token});
    $scope.orderBookmarks = 'id';

    // Init velibstations
    $scope.velibStations = VelibStation.query({authToken:token});

    // Init stickyboard
    $scope.sticky = StickyBoard.pull({authToken:token});
    $scope.weatherKey = key;

    // Get weather conditions from weather api
    WeatherReport.conditions({key:key}, function(wc){
        $scope.weatherReport = wc;
    });

    // Get weather astronomy from weather api
    WeatherReport.astronomy({key:key}, function(wa){
        $scope.weatherAstronomy = wa;
    });


    // Scope functions
    $scope.pushStickyboard = function(){
        token = $cookieStore.get('authToken');
        var response = StickyBoard.push({authToken:token}, {content:this.sticky.content});
    }

    $scope.pullStickyboard = function(){
        token = $cookieStore.get('authToken');
        $scope.sticky = StickyBoard.pull({authToken:token});
    }
});


