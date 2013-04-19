'use strict';

goodMorningAngularApp.controller("PreAuthCtrl", function($scope) {
});

goodMorningAngularApp.controller("AuthCtrl", function($scope, $location, $cookieStore, Auth) {
    $scope.email = 'marin.jeremy@gmail.com';
    $scope.password = 'sabusushi';

    if ($scope.authToken = $cookieStore.get('authToken')) {
        $scope.logged = true;
    } else {
        $scope.logged = false;
    }

    $scope.signin = function(){
        var response = Auth.signin({email:this.email, password:this.password}, function() {
            $cookieStore.put('authToken', response.authentication_token);
            $scope.authToken = response.authentication_token;
            $scope.username = response.user.email;
            $scope.logged = true;
            $location.path('/home/');
        });
    }

    $scope.signout = function(){
        var response = Auth.signout({}, function() {
            $cookieStore.remove('authToken');
            $scope.logged = false;
            $location.path('/');
        });
    }
});

goodMorningAngularApp.controller("MainCtrl", function($scope, StickyBoard, Bookmark) {
    $scope.bookmarks = Bookmark.query();
    $scope.sticky = StickyBoard.pull();
    $scope.orderBookmarks = 'id';

    $scope.pushStickyboard = function(){
        var response = StickyBoard.push({content:this.sticky.content});
    }

    $scope.pullStickyboard = function(){
        $scope.sticky = StickyBoard.pull();
    }
});

goodMorningAngularApp.controller("WeatherCtrl", function($scope) {
});

goodMorningAngularApp.controller("NewsCtrl", function($scope) {
});

goodMorningAngularApp.controller("BookmarksCtrl", function($scope) {
});

