'use strict';

function PreAuthCtrl($scope) {
}

function AuthCtrl($scope, $location, $cookieStore, Auth) {
    $scope.email = 'marin.jeremy@gmail.com';
    $scope.password = 'sabusushi';
    $scope.authToken = 'bidon';

    $scope.signin = function(){
        var response = Auth.signin({email:this.email, password:this.password}, function() {
            $cookieStore.put('authToken', response.authentication_token);
            $scope.authToken = response.authentication_token;
            $location.path('/home/');
        });
    }
}

function MainCtrl($scope, StickyBoard, Bookmark) {
    $scope.sticky = StickyBoard.get();
    $scope.bookmarks = Bookmark.query();
    $scope.orderBookmarks = 'id';

    $scope.pushStickyboard = function(){
        console.log('pushStickyboard');
        var response = Stickyboard.update({content:this.sticky.content});
    }
}

function WeatherCtrl($scope) {
}

function NewsCtrl($scope) {
}

function BookmarksCtrl($scope) {
}

