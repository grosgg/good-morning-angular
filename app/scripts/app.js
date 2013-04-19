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

