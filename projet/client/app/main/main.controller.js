'use strict';

angular.module('fs3App')
.controller('MainController', ['$scope','$http','jwtHelper', function($scope,$http,jwtHelper){
  var jwt = localStorage.getItem('JWT');
  $scope.movies = [];
  $scope.omdbid;
  $scope.showComment = false;
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

  $scope.$on('User:logedIn',function(){
    $scope.imdbID = 'movie.imdbID';
  });
  if(jwt === null || jwtHelper.isTokenExpired(jwt)){
    localStorage.clear();
		$rootScope.$broadcast('User:logedOut');
		$location.path('/');
    window.location.reload();
  }
  else{
    console.log("Token not expired", jwtHelper.getTokenExpirationDate(jwt));
    $scope.showComment = true;
  }

}]);
