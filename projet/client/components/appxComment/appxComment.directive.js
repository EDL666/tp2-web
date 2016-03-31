'use strict';

angular.module('fs3App')
  .directive('appxComment', function ($http) {
    return {
      templateUrl: 'components/appxComment/appxComment.html',
      restrict: 'EA',
      scope: {
              omdbid: '=omdbid'
        },
      link: function (scope, element, attrs)
      {
        scope.$watch('omdbid', function(value)
        {
          if(value !== undefined){
            $http({
            method: 'GET',
            url: 'https://crispesh.herokuapp.com/api/comments?movie_id='+value,
            timeout: 5000,
            }).then(
            function successCallback(response)
            {
              scope.comments = response.data;
            },
            function errorCallback(response)
            {
              console.log('Error loading comments');
            });
          }
        });
      }
    };
  });
