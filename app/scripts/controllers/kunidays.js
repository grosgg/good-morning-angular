'use strict';

goodMorningAngularApp.controller("KunidaysCtrl", function($scope, $filter, $cookieStore, KuniDay) {
    // Get backend token from cache
    var token = $cookieStore.get('authToken');

    // Figure current time
    var now = new Date();
    var dec31 = new Date(now.getFullYear(), 12, 31);
    $scope.hours = now.getHours();
    $scope.wday = now.getDay();

    // Init kunidays
    $scope.kuniDays = KuniDay.query({authToken:token});
    $scope.tWeek = now.getWeek();
    $scope.tYear = now.getFullYear();
    if ($scope.tWeek == dec31.getWeek()) {
        $scope.nWeek = 1;
        $scope.nYear = $scope.tYear+1;
    } else {
        $scope.nWeek = $scope.tWeek+1;
        $scope.nYear = $scope.tYear;
    }

    $scope.kuniSwitch = function(year, week, weekDay, ampm, previousValue){
        if (previousValue == undefined) {
            previousValue = '';
        }
        //console.log('params: '+year+' '+week+' '+weekDay+' '+ampm+' '+previousValue);

        var possibleValues = [
            { 'id': 0, 'status' :'' },
            { 'id': 1, 'status' :'kt1' },
            { 'id': 2, 'status' :'kt2' },
            { 'id': 3, 'status' :'free' },
            { 'id': 4, 'status' :'unsure' },
        ];

        var matchValue = $filter('filter')(possibleValues, previousValue);

        if (matchValue[0].id == 4) {
            var nextValueId = 0;
        } else {
            var nextValueId = matchValue[0].id+1;
        }

        // Create the object if it doesn't exist yet
        if ($scope.kuniDays[week][weekDay] == undefined) {
            $scope.kuniDays[week][weekDay] = {};
        }

        $scope.kuniDays[week][weekDay][ampm] = possibleValues[nextValueId].status;

        var response = KuniDay.save({authToken:token}, {
            'year': year,
            'week': week,
            'weekday': weekDay,
            'am': $scope.kuniDays[week][weekDay]['am'],
            'pm': $scope.kuniDays[week][weekDay]['pm']
        });
    }

});

