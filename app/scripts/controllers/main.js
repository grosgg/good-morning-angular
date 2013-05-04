'use strict';

goodMorningAngularApp.controller("MainCtrl", function($scope, $filter, $cookieStore, StickyBoard, Bookmark, WeatherReport, VelibStation, KuniDaySingle) {

    // Get backend token from cache
    var token = $cookieStore.get('authToken');
    //console.log('cookie before fetching: '+token);

    // Figure current time
    var now = new Date();
    var dec31 = new Date(now.getFullYear(), 12, 31);
    $scope.hours = now.getHours();
    $scope.wday = now.getDay();

    // Init bookmarks
    $scope.bookmarks = Bookmark.query({authToken:token});
    $scope.orderBookmarks = 'id';

    // Init velibstations
    $scope.velibStations = VelibStation.query({authToken:token});

    // Init stickyboard
    $scope.sticky = StickyBoard.pull({authToken:token});

    // Init today's kuniday
    $scope.kuniDay = KuniDaySingle.today({authToken:token});

    // Get weather conditions and astronomy from backend api
    //$scope.weatherReport = WeatherReport.query({authToken:token});



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


