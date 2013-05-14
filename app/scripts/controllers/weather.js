'use strict';

goodMorningAngularApp.controller("WeatherCtrl", function($scope, $rootScope, $cookieStore, WeatherReport) {
    // Get backend token from cache
    var token = $cookieStore.get('authToken');

    // Get weather conditions and astronomy from backend api
    $scope.weatherReport = WeatherReport.query({authToken:token});

    currentTime = ($scope.weatherReport['astronomy']['current_time']['hour'] * 60) + $scope.weatherReport['astronomy']['current_time']['minute'];
    sunriseTime = ($scope.weatherReport.astronomy.sunrise.hour * 60) + $scope.weatherReport.astronomy.sunrise.minute;
    sunsetTime = ($scope.weatherReport.astronomy.sunset.hour * 60) + $scope.weatherReport.astronomy.sunset.minute;
    console.log(current_time + ' ' + sunriseTime + ' ' + sunsetTime);

    if (currentTime >= sunriseTime && currentTime < sunsetTime) {
        $rootScope.weatherBackground = 'day-background';
    } else {
        $rootScope.weatherBackground = 'night-background';
    }

});

