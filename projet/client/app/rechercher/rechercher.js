'use strict';

angular.module('fs3App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('rechercher', {
        url: '/rechercher',
        templateUrl: 'app/rechercher/rechercher.html',
        controller: 'RechercherCtrl'
      });
  });
