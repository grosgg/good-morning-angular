'use strict';

function MainCtrl($scope, StickyBoard, Bookmark) {
    $scope.sticky = StickyBoard.get();
    $scope.bookmarks = Bookmark.query();
    $scope.orderBookmarks = 'id';
}

function AuthCtrl($scope, Auth) {
    $scope.email = 'bidon';
    $scope.password = 'bidon';
    $scope.authToken = 'bidon';

    $scope.signin = function(){
        $scope.authToken = Auth.signin({email:this.email, password:this.password});
    }
}

function WeatherCtrl($scope) {
}

function NewsCtrl($scope) {
}

function BookmarksCtrl($scope) {
}

