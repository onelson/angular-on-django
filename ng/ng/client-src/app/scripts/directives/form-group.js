'use strict';

angular.module('demoApp')
  .directive('formGroup', function () {
    return {
      templateUrl: 'views/directives/form-group.html',
      restrict: 'A',
      transclude: true,
      scope: {
        label: '@',
        requiredIcon: '@',
        input: '='
      },
      link: function postLink(scope, element, attrs) {
      }
    };
  });
