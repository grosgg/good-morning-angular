"use strict";

describe('Controller: BookmarksCtrl', function() {

    var scope, ctrl, $httpBackend;

    beforeEach(module('goodMorningAngularApp'));

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('http://localhost:3000/bookmarks.json?authentication_token=').
            respond([
                {"id":1,"title":"Sabu Web","url":"http://sabu.fr","description":"Our wedding website"},
                {"id":2,"title":"Google","url":"http://www.google.fr","description":"The Search Engine"},
                {"id":3,"title":"Japon 365","url":"http://www.japon365.com","description":"Photo Blog about Japan"}
            ]);

        scope = $rootScope.$new();
        ctrl = $controller('BookmarksCtrl', {$scope: scope});
    }));

    it('should create "bookmarks" model with 3 bookmarks fetched from xhr', function() {
        expect(scope.bookmarks).toEqual([]);
        $httpBackend.flush();

        expect(scope.bookmarks.length).toBe(3);
    });


    it('should set the default value of orderBookmarks model', function() {
        expect(scope.orderBookmarks).toBe('id');
    });

    it('should set the default value of reverseBookmarks model', function() {
        expect(scope.reverseBookmarks).toBe(true);
    });

});
