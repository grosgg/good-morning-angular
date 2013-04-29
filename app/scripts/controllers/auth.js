'use strict';

goodMorningAngularApp.controller("AuthCtrl", function($scope, $rootScope, $location, $cookieStore, Auth, WeatherKey) {
    $scope.email = 'marin.jeremy@gmail.com';
    $scope.password = 'sabusushi';

    $scope.signin = function(){
        var responseAuth = Auth.signin({email:this.email, password:this.password}, function() {

            $cookieStore.put('authToken', responseAuth.authentication_token);

            $scope.authToken = responseAuth.authentication_token;
            $scope.username = responseAuth.user.email;
            $rootScope.logged = true;

            console.log('auth cookie after signin: '+$cookieStore.get('authToken'));
            $location.path('/home/');
        });
    }

    $scope.signout = function(){
        var token = $cookieStore.get('authToken');
        var response = Auth.signout({authToken:token}, function() {
            $cookieStore.remove('authToken');
            $rootScope.logged = false;
            console.log('cookie after signout: '+$cookieStore.get('authToken'));
            $location.path('/');
        });
    }
});

