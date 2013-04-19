'use strict';

goodMorningAngularApp.controller("PreAuthCtrl", function($scope) {
});

goodMorningAngularApp.controller("AuthCtrl", function($scope, $rootScope, $location, $cookieStore, Auth) {
    $scope.email = 'marin.jeremy@gmail.com';
    $scope.password = 'sabusushi';

    $scope.signin = function(){
        var response = Auth.signin({email:this.email, password:this.password}, function() {
            $cookieStore.put('authToken', response.authentication_token);
            $scope.authToken = response.authentication_token;
            $scope.username = response.user.email;
            $rootScope.logged = true;
            console.log('cookie after signin: '+$cookieStore.get('authToken'));
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

goodMorningAngularApp.controller("MainCtrl", function($scope, $cookieStore, StickyBoard, Bookmark) {
    var token = $cookieStore.get('authToken');
    console.log('cookie before fetching: '+token);

    $scope.bookmarks = Bookmark.query({authToken:token});
    $scope.sticky = StickyBoard.pull({authToken:token});
    $scope.orderBookmarks = 'id';

    $scope.pushStickyboard = function(){
        token = $cookieStore.get('authToken');
        var response = StickyBoard.push({authToken:token}, {content:this.sticky.content});
    }

    $scope.pullStickyboard = function(){
        token = $cookieStore.get('authToken');
        $scope.sticky = StickyBoard.pull({authToken:token});
    }
});

goodMorningAngularApp.controller("WeatherCtrl", function($scope) {
});

goodMorningAngularApp.controller("NewsCtrl", function($scope) {
});

goodMorningAngularApp.controller("BookmarksCtrl", function($scope) {
});

