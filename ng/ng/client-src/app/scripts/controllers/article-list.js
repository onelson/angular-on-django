'use strict';

angular.module('demoApp')
  .controller('ArticleListCtrl', function ($scope, $resource) {
    var Article = $resource('/api/articles/:id');
    $scope.articles = Article.query();
  });
