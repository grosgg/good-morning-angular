'use strict';

var goodMorningAngularApp = angular.module('goodMorningAngularApp', ['ngCookies', 'authServices', 'stickyServices', 'bookmarkServices']);

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
    .when('/news', {
        templateUrl: 'views/news.html',
        controller: 'NewsCtrl'
    })
    .when('/bookmarks', {
        templateUrl: 'views/bookmarks.html',
        controller: 'BookmarksCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
});

goodMorningAngularApp.factory('goodMorningInterceptor', function ($q, $location, $rootScope, $cookieStore) {
    return function (promise) {

        var success = function(response) {
            console.log('promise success');
            return response;
        };

        var fail = function(response) {
            console.log('promise fail');
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

});

