'use strict';

angular.module('demoApp')
  .controller('ArticleEditCtrl', function (
    $scope,
    $resource,
    $routeParams,
    $location,
    $log) {

    // resources that need to use PUT to update existing records require a
    // little additional config.
    var Article = $resource('/api/articles/:id', {id: '@id'}, {
        update: {method: 'PUT'}
      }),
      Category = $resource('/api/categories/:id');

    if ( $routeParams.id ) {
      $scope.article = Article.get({id: $routeParams.id});
    } else {
      $scope.article = new Article();
    }

    $scope.categories = Category.query();

    function onUpdate( resource, headers ) {
      for (var name in $scope.articleForm) {  // remove any old error messages
        $scope.articleForm[name].$error = null;
      }
    }

    function onCreate( resource, headers ) {
      onUpdate(resource, headers);
      $location.path('/posts/edit/' + resource.id);
    }

    function onError( response, headers ) {
      if (response.status === 400) {
        for (var name in response.data) {
          $scope.articleForm[name] = $scope.articleForm[name] || {};
          $scope.articleForm[name].$error = response.data[name];
        }
      } else {
        // TODO: implement something a little more nice looking
        alert('Server Error: unable to complete request');
        $log.error(response);
        // TODO: capture error with raven client
        throw new Error(angular.toJson(response));
      }
    }

    $scope.submit = function submit ( ) {
      if ($scope.article.id) {
        $scope.article.$update(onUpdate, onError);
      } else {
        $scope.article.$save(onCreate, onError);
      }
    };

    $scope.$watch('article.title', function () {
      if ($scope.article.title) {
        // thank you SO: http://stackoverflow.com/a/1054862/140396
        $scope.article.slug = $scope.article.title
                                              .toLowerCase()
                                              .replace(/[^\w ]+/g,'')
                                              .replace(/ +/g,'-');
      }
    });

    
  });
