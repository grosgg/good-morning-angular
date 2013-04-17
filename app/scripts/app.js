'use strict';

angular.module('goodMorningAngularApp', ['ngCookies', 'authServices', 'stickyServices', 'bookmarkServices'])
  .config(function ($routeProvider, $locationProvider) {
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
  })

.config(function($httpProvider) {
  var interceptor = ['$rootScope', '$q', function(scope, $q) {

    function success( response ) {
      return response
    };

    function error( response ) {
      if ( response.status == 401) {
        var deferred = $q.defer();
        scope.$broadcast('event:unauthorized');
        return deferred.promise;
      };
      return $q.reject( response );
    };

    return function( promise ) {
      return promise.then( success, error );
    };

  }];
  $httpProvider.responseInterceptors.push( interceptor );
});
