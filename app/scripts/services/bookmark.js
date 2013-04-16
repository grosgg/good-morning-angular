'use strict';

angular.module('bookmarkServices', ['ngResource'])
.factory('Bookmark', function ($resource) {
    return $resource('http://localhost\\:3000/bookmarks.json?authentication_token=jCJCM5bxuHjirwxDCyrs', {}, {});
});
