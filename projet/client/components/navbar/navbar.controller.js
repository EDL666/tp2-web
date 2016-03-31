'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Accueil',
    'state': 'main'
  },
  {
    'title': 'Contact',
    'state': 'contact'
  },
  {
    'title': 'Créer mon compte',
    'state': 'inscription'
  },
  {
    'title': 'Rechercher',
    'state': 'rechercher'
  },
  {
    'title': 'Connexion',
    'state': 'connexion'
  }

  ];

  isCollapsed = true;
  //end-non-standard

  constructor() {
    }
}

angular.module('fs3App')
  .controller('NavbarController', NavbarController);
