'use strict';

angular.module('demoApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/posts', {
        templateUrl: 'views/article-list.html',
        controller: 'ArticleListCtrl'
      })
      .otherwise({
        // since I don't have a landing page or whatever, I'm redirecting
        // unmatched routes to the article list
        redirectTo: '/posts'
      });
  });
