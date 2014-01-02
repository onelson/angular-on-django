'use strict';

describe('Controller: ArticleEditCtrl', function () {

  // load the controller's module
  beforeEach(module('demoApp'));

  var ArticleEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ArticleEditCtrl = $controller('ArticleEditCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
