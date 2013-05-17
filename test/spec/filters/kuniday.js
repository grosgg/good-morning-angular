"use strict";

describe('Filters: kunidayFilters', function () {

    // load the filter's module
    beforeEach(module('kunidayFilters'));

    describe('Filter: KuniLabelFilter', function() {
        it('should return bootstrap label classes', inject(function(KuniLabelFilter) {
            expect(KuniLabelFilter('free')).toBe('label-info');
            expect(KuniLabelFilter('kt1')).toBe('label-important');
            expect(KuniLabelFilter('kt2')).toBe('label-important');
            expect(KuniLabelFilter('unsure')).toBe('label-warning');
        }));
    });
});

