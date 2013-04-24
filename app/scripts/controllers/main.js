'use strict';

goodMorningAngularApp.controller("MainCtrl", function($scope, $cookieStore, $http, $filter, StickyBoard, Bookmark, WeatherReport) {
    var token = $cookieStore.get('authToken');
    var key = $cookieStore.get('weatherKey');
    var now = new Date();
    console.log('cookie before fetching: '+token);

    $scope.bookmarks = Bookmark.query({authToken:token});
    $scope.sticky = StickyBoard.pull({authToken:token});
    $scope.orderBookmarks = 'id';
    $scope.weatherKey = key;
    $scope.hours = now.getHours();


    WeatherReport.report({key:key}, function(wr){
        $scope.weatherReport = wr.data.current_condition[0];
        $scope.weatherCode = wr.data.current_condition[0].weatherCode;
        console.log('wc: '+$scope.weatherCode);

        $http({method:'GET', url:'/resources/wwoConditionCodes.json'})
        .success(function(data) {
            $scope.conditionCodes = data;
        });

        $scope.conditionCode = $filter('filter')($scope.conditionCodes, $scope.weatherCode);
        console.log('cc: '+$scope.conditionCode);
    });


    $scope.pushStickyboard = function(){
        token = $cookieStore.get('authToken');
        var response = StickyBoard.push({authToken:token}, {content:this.sticky.content});
    }

    $scope.pullStickyboard = function(){
        token = $cookieStore.get('authToken');
        $scope.sticky = StickyBoard.pull({authToken:token});
    }
});


