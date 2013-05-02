"use strict";

angular.module('kunidayFilters', [])
.filter('KuniLabel', function () {

    var labelClasses = {
        free: 'label-info',
        kt1: 'label-important',
        kt2: 'label-important',
        unsure: 'label-warning'
    };

    return function(status) {
        return labelClasses[status];
    };
});
