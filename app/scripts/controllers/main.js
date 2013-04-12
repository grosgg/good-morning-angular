'use strict';

function MainCtrl($scope, StickyBoard, Bookmark) {
    $scope.sticky = StickyBoard.query();
    $scope.bookmarks = Bookmark.query();
    $scope.orderBookmarks = 'id';
}

function WeatherCtrl($scope) {
}

function NewsCtrl($scope) {
}

function BookmarksCtrl($scope) {
}

