'use strict';

function PreAuthCtrl($scope) {
}

function AuthCtrl($scope, $location, $cookieStore, Auth) {
    $scope.logged = false;
    $scope.email = 'marin.jeremy@gmail.com';
    $scope.password = 'sabusushi';
    $scope.authToken = 'bidon';

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
            $location.path('/');
        });
    }
}

function MainCtrl($scope, StickyBoard, Bookmark) {
    $scope.sticky = StickyBoard.pull();
    $scope.bookmarks = Bookmark.query();
    $scope.orderBookmarks = 'id';

    $scope.pushStickyboard = function(){
        var response = StickyBoard.push({content:this.sticky.content});
    }

    $scope.pullStickyboard = function(){
        $scope.sticky = StickyBoard.pull();
    }
}

function WeatherCtrl($scope) {
}

function NewsCtrl($scope) {
}

function BookmarksCtrl($scope) {
}

