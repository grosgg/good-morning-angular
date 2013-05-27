'use strict';

goodMorningAngularApp.controller("NewsStreamCtrl", function($scope, $cookieStore, $dialog, NewsStream, NewsStreamSingle) {

    // Get backend token from cache
    var token = $cookieStore.get('authToken');
    $scope.alerts = [];

    $scope.newsStreams = NewsStream.query({authToken:token});

    var dialogOpts = {
        keyboard: false,
        backdropClick: true,
        templateUrl: 'views/newsstream_box.html',
        controller: 'NewsStreamBoxCtrl'
    };

    $scope.newsStreamBox = function(item){
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
                    $scope.newsStreams = NewsStream.query({authToken:token});
                    $scope.alerts.push({type: 'success', msg: "News stream successfully added."});
                } else {
                    angular.copy(result, itemToEdit);
                    $scope.alerts.push({type: 'success', msg: "News stream successfully updated."});
                }
            }
            itemToEdit = undefined;
        });
    };

    $scope.removeStream = function(streamId){
        NewsStreamSingle.remove(
            {authToken:token, id:streamId},
            function(id) {
                $scope.alerts.push({type: 'success', msg: "News stream successfully deleted."});
                $scope.newsStreams = NewsStream.query({authToken:token});
            },
            function() {
                $scope.alerts.push({type: 'error', msg: "News stream not deleted!"});
            }
        );
    }

});

goodMorningAngularApp.controller("NewsStreamBoxCtrl", function($scope, $cookieStore, dialog, item, NewsStream, NewsStreamSingle) {
    // Get backend token from cache
    var token = $cookieStore.get('authToken');

    $scope.item = item;

    $scope.save = function(){
        //console.log($scope.item);
        if (item == null) {
            NewsStream.create(
                {authToken:token},
                {title: $scope.item.title, url: $scope.item.url},
                function(response) {
                    dialog.close(response);
                },
                function() {
                    $scope.alerts.push({type: 'error', msg: "News stream not added!"});
                }
            );
        } else {
            NewsStreamSingle.update(
                {authToken:token, id:$scope.item.id},
                {title: $scope.item.title, url: $scope.item.url},
                function() {
                    dialog.close($scope.item);
                },
                function() {
                    $scope.alerts.push({type: 'error', msg: "News stream not updated!"});
                }
            );
        }

    };

    $scope.cancel = function(){
       dialog.close(false);
    };
});
