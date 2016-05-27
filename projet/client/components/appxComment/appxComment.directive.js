'use strict';

angular.module('fs3App')
  .directive('appxComment', function ($http, APP_API_URL) {
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
          if(value !== undefined && localStorage.getItem('JWT') != undefined){
            $http({
            method: 'GET',
            url: APP_API_URL + '/comments?movie_id=' + value,
            timeout: 5000,
            }).then(
            function successCallback(response)
            {
              scope.comments = response.data;
              scope.omdbid = value;
            },
            function errorCallback(response)
            {
            });
          }
        });
      }
    };
  });
