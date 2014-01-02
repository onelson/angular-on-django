'use strict';

describe('Controller: ArticleListCtrl', function () {

  // load the controller's module
  beforeEach(module('demoApp'));

  var ArticleListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ArticleListCtrl = $controller('ArticleListCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
