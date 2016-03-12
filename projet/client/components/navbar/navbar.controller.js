'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Accueil',
    'state': 'main'
  },
  {
    'title': 'Projets',
    'state': 'projet'
  },
  ];

  isCollapsed = true;
  //end-non-standard

  constructor() {
    }
}

angular.module('fs3App')
  .controller('NavbarController', NavbarController);
