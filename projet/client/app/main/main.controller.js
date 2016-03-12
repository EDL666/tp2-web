'use strict';

angular.module('fs3App')
.controller('MainController', ['$scope','$http', function($scope,$http){
  $scope.movies = [];
  $scope.caca = "allo";
  $http.get('https://www.omdbapi.com/?y=2016&s=batman&type=movie').then(
    function successCallback(response) {
      // Ce bloc sera exécuté lorsque la réponse sera reçue.
      // Asynchrone
      console.log(response);
      console.log(response.data);
      $scope.movies = response.data.Search;
    },
    function errorCallback(response) {
      // Ce bloc sera exécuté lorsqu'une erreur est détectée.
      // Asynchrone
      console.log(response);
    }
  );

}]);
