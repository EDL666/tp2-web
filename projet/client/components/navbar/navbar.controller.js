'use strict';

var menu;

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Accueil',
    'state': 'main'
  },
  {
    'title': 'Créer mon compte',
    'state': 'inscription'
  },
  {
    'title': 'Connexion',
    'state': 'connexion'
  }
  ];

  isCollapsed = true;
  //end-non-standard

constructor($scope) {
  $scope.$on('User:logedin', function(event, args) {
      console.log(event);
      menu = [{
        {
          'title': 'Contact',
          'state': 'contact'
        },
        {
          'title': 'Rechercher',
          'state': 'rechercher'
        }
      }];
    }
  }
}

angular.module('fs3App')
  .controller('NavbarController', NavbarController);
