'use strict';

goodMorningAngularApp.controller("WeatherCtrl", function($scope, $rootScope, $cookieStore, WeatherReport) {
    // Get backend token from cache
    var token = $cookieStore.get('authToken');

    // Get weather conditions and astronomy from backend api
    WeatherReport.full({authToken:token}, function(data){
        //$scope.conditions = data.conditions;
        //$scope.astronomy = data.astronomy;
        $scope.hourly = data.hourly;
        $scope.forecast = data.forecast.simpleforecast.forecastday;

        /*
         *var currentTime = (parseInt(data.astronomy.current_time.hour) * 60) + parseInt(data.astronomy.current_time.minute);
         *var sunriseTime = (parseInt(data.astronomy.sunrise.hour) * 60) + parseInt(data.astronomy.sunrise.minute);
         *var sunsetTime = (parseInt(data.astronomy.sunset.hour) * 60) + parseInt(data.astronomy.sunset.minute);
         *console.log(currentTime + ' ' + sunriseTime + ' ' + sunsetTime);
         */

        /*
         *if (currentTime >= sunriseTime && currentTime < sunsetTime) {
         *    $rootScope.backgroundMode = 'day-mode';
         *    $rootScope.navbarMode = '';
         *} else {
         *    $rootScope.backgroundMode = 'night-mode';
         *    $rootScope.navbarMode = 'navbar-inverse';
         *}
         */
    });



});

