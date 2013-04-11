'use strict';

function MainCtrl($scope, StickyBoard) {
    $scope.sticky = StickyBoard.query();
  }
