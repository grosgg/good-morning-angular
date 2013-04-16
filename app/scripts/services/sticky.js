'use strict';

angular.module('stickyServices', ['ngResource'])
.factory('StickyBoard', function ($resource) {
    return $resource(
        'http://localhost\\:3000/stickyboards/:stickyId.json?authentication_token=jCJCM5bxuHjirwxDCyrs',
        {stickyId:1},
        {}
    );
});
