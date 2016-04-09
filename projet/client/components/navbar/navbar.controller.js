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

  if(localStorage.getItem('JWT') == undefined){
    $scope.isLoggedIn = false;
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

  }
  else {
    $scope.isLoggedIn = true;
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
  }
  $scope.logout = function(){
    localStorage.clear();
    $rootScope.$broadcast('User:logedOut');
    $location.path('/');
    location.reload();
  }
  $scope.userName = localStorage.getItem('Username');


}]);
