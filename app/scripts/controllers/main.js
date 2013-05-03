'use strict';

goodMorningAngularApp.controller("MainCtrl", function($scope, $filter, $cookieStore, StickyBoard, Bookmark, WeatherReport, VelibStation, KuniDay) {

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
    $scope.tWeek = now.getWeek();
    $scope.tWeekYear = now.getFullYear();
    if ($scope.tWeek == 52) {
        $scope.nWeek = 1;
        $scope.nWeekYear = $scope.tWeekYear+1;
    } else {
        $scope.nWeek = $scope.tWeek+1;
        $scope.nWeekYear = $scope.tWeekYear;
    }

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

    $scope.kuniSwitch = function(week, weekDay, ampm, previousValue){
        if (previousValue == undefined) {
            previousValue = '';
        }
        console.log('params: '+week+' '+weekDay+' '+ampm+' '+previousValue);
        var possibleValues = [
            { 'id': 0, 'status' :'' },
            { 'id': 1, 'status' :'kt1' },
            { 'id': 2, 'status' :'kt2' },
            { 'id': 3, 'status' :'free' },
            { 'id': 4, 'status' :'unsure' },
        ];
        var matchValue = $filter('filter')(possibleValues, previousValue);
        var matchValueId = matchValue[0].id;
        if (matchValueId == 4) {
            var nextValueId = 0;
        } else {
            var nextValueId = matchValueId+1;
        }

        // Create the object if it doesn't exist yet
        if ($scope.kuniDays[week][weekDay] == undefined) {
            $scope.kuniDays[week][weekDay] = {};
        }

        $scope.kuniDays[week][weekDay][ampm] = possibleValues[nextValueId].status;

        var response = KuniDay.save({authToken:token}, {
            'week': week,
            'weekday': weekDay,
            'am': $scope.kuniDays[week][weekDay]['am'],
            'pm': $scope.kuniDays[week][weekDay]['pm']
        });
    }

});


