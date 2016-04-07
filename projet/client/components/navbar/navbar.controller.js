'use strict';
var menu;

class NavbarController {
  //start-non-standard

  isCollapsed = true;
  //end-non-standard

  constructor($scope) {

  }
};

angular.module('fs3App').controller('NavbarController',['$scope','$location','$rootScope',function($scope,$location,$rootScope){

  $scope.isLogedIn = false;
  $scope.menu  = [
    {
      'title': 'Accueil',
      'state': 'main'
    },
    {
      'title': 'Créer mon compte',
      'state': 'inscription'
    }
  ];

  $scope.$on('User:logedIn',function(){
    console.log('ALLO LOGIN');
    $scope.menu  = [
      {
        'title': 'Accueil',
        'state': 'main'
      },
      {
        'title': 'Contact',
        'state': 'contact'
      },
      {
        'title': 'Rechercher',
        'state': 'rechercher'
      }
    ];
    $scope.isLoggedIn = true;
  });

  $scope.$on('User:logedOut',function(){
    console.log('ALLO LOGOUT');
    console.log('Jaime les chats');
    $scope.menu  = [
      {
        'title': 'Accueil',
        'state': 'main'
      },
      {
        'title': 'Créer mon compte',
        'state': 'inscription'
      }
    ];
    $scope.isLoggedIn = false;
  })

  $scope.logout = function(){
		localStorage.clear();
		$rootScope.$broadcast('User:logedOut');
		$location.path('/');
    window.location.reload();
	}

  $scope.userName = localStorage.getItem('Username'); 


}]);
