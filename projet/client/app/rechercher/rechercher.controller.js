'use strict';

angular.module('fs3App')
.controller('RechercherCtrl', ['$scope', '$http', function($scope,$http) {
	$scope.displayResults = false;
	$scope.movies = [];
	$scope.nbResults = 0;
	$scope.searchClause = "";

	$scope.search = function ()
	{
		$http.get('https://omdbapi.com/?', {params : {s : $scope.searchClause, r : "json"}}, setTimeout(function () {

		}, 5000)).then
		(
			function successCallback(response)
			{
				if (response.data.Response == "True")
				{
					$scope.movies = response.data.Search;
					$scope.nbResults = response.data.totalResults;
				}
				else
				{
					$scope.nbResults = response.data.Error;
					$scope.movies = [];
				}
				$scope.displayResults = true;
			},
			function errorCallback(response)
			{
				$scope.nbResults = "ERREUR SERVEUR";
				$scope.movies = [];
				$scope.displayResults = true;
			}
		);
	}
}]);
