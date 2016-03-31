'use strict';

angular.module('fs3App')
  .config(function ($stateProvider) {
    $stateProvider.state('connexion', {
        url: '/connexion',
        templateUrl: 'app/connexion/connexion.html',
        controller: 'ConnexionCtrl'
      });
  });
