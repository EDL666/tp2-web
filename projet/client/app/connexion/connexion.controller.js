'use strict';
var app = angular.module('fs3App');

app.controller('ConnexionCtrl', ['$scope', '$http','$location','$rootScope','toastr', function($scope,$http,$location,$rootScope,toastr) {
	$scope.connexion = function(user){
		var apiUrl = 'https://crispesh.herokuapp.com/api';
    $http(
      {
        method: 'POST',
        url: apiUrl + '/login_check',
        data: {username: user.username, password:user.password}
      }
    	).then(
				function successCallback(data)
	      {
					console.log(data);
					if(data.data != undefined){
						$rootScope.$broadcast('User:logedIn');
		        localStorage.setItem('JWT', data.data.token);
						localStorage.setItem('Username', user.username);
		        console.log("Saving token to localstorage", data.data.token);
						toastr.success(user.username + ' vous êtes connecté', 'Bienvenue');
						$location.path('/');
						console.log("Erreur de login", error);
					}
	      },
        function errorCallback(error)
    		{
					$scope.error = error;
					toastr.error('Vos avez fait des erreurs lors de votre identification', 'Erreur');
          console.log("Erreur de login", error);
        }
    );
	};
}]);
