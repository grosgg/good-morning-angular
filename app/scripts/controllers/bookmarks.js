'use strict';

goodMorningAngularApp.controller("BookmarksCtrl", function($scope, $cookieStore, $dialog, Bookmark, BookmarkSingle) {
    // Get backend token from cache
    var token = $cookieStore.get('authToken');
    $scope.alerts = [];

    // Init bookmarks
    $scope.bookmarks = Bookmark.query({authToken:token});
    $scope.orderBookmarks = 'id';
    $scope.reverseBookmarks = true;

    var dialogOpts = {
        keyboard: false,
        backdropClick: true,
        templateUrl: 'views/modals/bookmark_box.html',
        controller: 'BookmarkBoxCtrl'
    };

    $scope.bookmarkBox = function(item){
        if (item != null && item != undefined) {
            var itemToEdit = item;
        } else {
            var itemToEdit = null;
        }
        //console.log(itemToEdit);

        $dialog.dialog(angular.extend(dialogOpts, {resolve: {item: function() {return angular.copy(itemToEdit)}}}))
        .open()
        .then(function(result){
            if(result) {
                //console.log(result);
                if (result.created_at == result.updated_at) {
                    $scope.bookmarks = Bookmark.query({authToken:token});
                    $scope.alerts.push({type: 'success', msg: "Bookmark successfully created."});
                } else {
                    angular.copy(result, itemToEdit);
                    $scope.alerts.push({type: 'success', msg: "Bookmark successfully updated."});
                }
            }
            itemToEdit = undefined;
        });
    };

    $scope.deleteBookmark = function(id, index){
        BookmarkSingle.remove(
            {authToken:token, id: id},
            function(id) {
                $scope.bookmarks.splice(index, 1);
                $scope.alerts.push({type: 'success', msg: "Bookmark successfully deleted."});
            },
            function() {
                $scope.alerts.push({type: 'error', msg: "Bookmark not deleted!"});
            }
        );
    };

    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };
});

goodMorningAngularApp.controller("BookmarkBoxCtrl", function($scope, $cookieStore, dialog, item, Bookmark, BookmarkSingle) {
    // Get backend token from cache
    var token = $cookieStore.get('authToken');

    $scope.item = item;

    $scope.save = function(){
        //console.log($scope.item);
        if (item == null) {
            Bookmark.create(
                {authToken:token},
                {title: $scope.item.title, url: $scope.item.url, description: $scope.item.description},
                function(response) {
                    dialog.close(response);
                },
                function() {
                    $scope.alerts.push({type: 'error', msg: "Bookmark not created!"});
                }
            );
        } else {
            BookmarkSingle.update(
                {authToken:token, id:$scope.item.id},
                {title: $scope.item.title, url: $scope.item.url, description: $scope.item.description},
                function() {
                    dialog.close($scope.item);
                },
                function() {
                    $scope.alerts.push({type: 'error', msg: "Bookmark not updated!"});
                }
            );
        }

    };

    $scope.cancel = function(){
       dialog.close(false);
    };
});

