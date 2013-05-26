'use strict';

var goodMorningAngularApp = angular.module('goodMorningAngularApp', [
    'ui.bootstrap',
    'ngCookies', 'authServices',
    'stickyServices', 'bookmarkServices',
    'velibstationServices', 'newsstreamServices',
    'weatherreportServices', 'kunidayServices',
    'kunidayFilters'
]);

goodMorningAngularApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/preauth.html',
        controller: 'PreAuthCtrl'
    })
    .when('/home', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
    })
    .when('/weather', {
        templateUrl: 'views/weather.html',
        controller: 'WeatherCtrl'
    })
    .when('/kunidays', {
        templateUrl: 'views/kunidays.html',
        controller: 'KunidaysCtrl'
    })
    .when('/news', {
        templateUrl: 'views/news.html',
        controller: 'NewsCtrl'
    })
    .when('/bookmarks', {
        templateUrl: 'views/bookmarks.html',
        controller: 'BookmarksCtrl'
    })
    .when('/preferences', {
        templateUrl: 'views/preferences.html',
        controller: 'PreferencesCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });

    //$locationProvider.hashPrefix('!');
    //$locationProvider.html5Mode(true);
});

goodMorningAngularApp.factory('goodMorningInterceptor', function ($q, $location, $rootScope, $cookieStore) {
    return function (promise) {

        var success = function(response) {
            //console.log('promise success');
            return response;
        };

        var fail = function(response) {
            //console.log('promise fail');
            $cookieStore.remove('authToken');
            $rootScope.logged = false;
            $location.path('/');
        };

        return promise.then(success,fail);
    };
});

goodMorningAngularApp.config(function ($httpProvider) {
    $httpProvider.responseInterceptors.push('goodMorningInterceptor');
});

goodMorningAngularApp.run(function($rootScope, $cookieStore) {
    if ($rootScope.authToken = $cookieStore.get('authToken')) {
        $rootScope.logged = true;
    } else {
        $rootScope.logged = false;
    }

    $rootScope.weatherBackground = 'neutral-background';
});

Date.prototype.getWeek = function() {
    var d = this;
    d.setHours(0,0,0);
    d.setDate(d.getDate() + 4 - (d.getDay()||7));
    var onejan = new Date(d.getFullYear(),0,1);
    return Math.ceil((((d - onejan) / 86400000) + onejan.getDay()+1)/7);
}
