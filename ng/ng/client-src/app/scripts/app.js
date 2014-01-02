'use strict';

angular.module('demoApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function (
    $routeProvider,
    $httpProvider) {

  // grabs the csrf token out of the cookie (and adds it as a header to
  // ajax calls).
  $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
  $httpProvider.defaults.xsrfCookieName = 'csrftoken';

  $routeProvider
      .when('/posts', {
        templateUrl: 'views/article-list.html',
        controller: 'ArticleListCtrl'
      })
      .when('/posts/new', {
        templateUrl: 'views/article-edit.html',
        controller: 'ArticleEditCtrl'
      })
      .when('/posts/edit/:id', {
        templateUrl: 'views/article-edit.html',
        controller: 'ArticleEditCtrl'
      })
      .otherwise({
        // since I don't have a landing page or whatever, I'm redirecting
        // unmatched routes to the article list
        redirectTo: '/posts'
      });
  });
