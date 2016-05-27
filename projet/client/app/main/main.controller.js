'use strict';

angular.module('fs3App')
.controller('MainController', ['$scope','$http','jwtHelper','$rootScope','$location', 'APP_API_URL', 'topTenService', function($scope,$http,jwtHelper,$rootScope,$location,APP_API_URL,topTenService){
  var jwt = localStorage.getItem('JWT');
  $scope.movies = [];
  $scope.topTen = [];
  $scope.showComment = false;
  $scope.response;
  $scope.data = topTenService.get();
  $scope.data.$promise.then(function(data){
    var count = 0;
    for (var id in data){
      if(count < 10)
      {
        $scope.topTen.push({
          "movie_id":id,
          "rating": data[id]
        });
        count += 1;
      }
      else                          // C'est pour sauter les autres valeurs de la promesse
      {
        break;
      }
    }

    angular.forEach($scope.topTen , function (movie){
      $http.get('https://www.omdbapi.com/?i=' + movie.movie_id + '&r=json').then(
        function successCallback(response) {
          // Ce bloc sera exécuté lorsque la réponse sera reçue.
          // Asynchrone
          response.data.Rating = movie.rating;
          $scope.movies.push(response.data);
        },
        function errorCallback(response) {
          // Ce bloc sera exécuté lorsqu'une erreur est détectée.
          // Asynchrone
          console.log(response);
        }
      );
    });

  });

  if(jwt === null || jwtHelper.isTokenExpired(jwt)){
    localStorage.clear();
		$rootScope.$broadcast('User:logedOut');
		$location.path('/');
  }
  else{
    $scope.showComment = true;
  }

}]);
