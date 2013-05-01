'use strict';

goodMorningAngularApp.controller("MainCtrl", function($scope, $cookieStore, StickyBoard, Bookmark, WeatherReport, VelibStation, KuniDay) {

    // Get backend token and weather key from cache
    var token = $cookieStore.get('authToken');
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

    // Init kunidays
    $scope.kuniDays = KuniDay.query({authToken:token});

    // Get weather conditions and astronomy from backend api
    //$scope.weatherReport = WeatherReport.query({authToken:token});

    $scope.kuniPop = '<a class="btn" ng-click="kuniPop(index)">Gros</a>';


    // Scope functions
    $scope.pushStickyboard = function(){
        token = $cookieStore.get('authToken');
        var response = StickyBoard.push({authToken:token}, {content:this.sticky.content});
    }

    $scope.pullStickyboard = function(){
        token = $cookieStore.get('authToken');
        $scope.sticky = StickyBoard.pull({authToken:token});
    }

    var setVR = function(data) {
        $scope.velibReports.push(data);
    }
});


