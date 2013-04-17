'use strict';

function PreAuthCtrl($scope) {
}

function AuthCtrl($scope, Auth) {
    $scope.email = 'marin.jeremy@gmail.com';
    $scope.password = 'sabusushi';
    $scope.authToken = 'bidon';

    $scope.signin = function(){
        response = Auth.signin({email:this.email, password:this.password});
        $scope.authToken = response.authentication_token;
    }
}

function MainCtrl($scope, StickyBoard, Bookmark) {
    $scope.sticky = StickyBoard.get();
    $scope.bookmarks = Bookmark.query();
    $scope.orderBookmarks = 'id';
}

function WeatherCtrl($scope) {
}

function NewsCtrl($scope) {
}

function BookmarksCtrl($scope) {
}

