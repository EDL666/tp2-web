'use strict';
var app = angular.module('fs3App');

app.controller('ConnexionCtrl', ['$scope', '$http','$location','$rootScope','toastr', function($scope,$http,$location,$rootScope,toastr) {
	$scope.connexion = function(user){
		var apiUrl = 'https://crispesh.herokuapp.com/api';
    $http(
      {
        method: 'POST',
        url: apiUrl + '/login_check',
        data: {username: user.username, password: user.password}
      }
    	).then(
				function successCallback(data)
	      {
					$rootScope.$broadcast('User:logedin');
	        localStorage.setItem('JWT', data.data.token);
	        console.log("Saving token to localstorage", data.data.token);
					$location.path('/')
	      },
        function errorCallback(error)
    		{
          console.log("Erreur de login", error);
        }
    );
	}
}]);
