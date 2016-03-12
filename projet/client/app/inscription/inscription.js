'use strict';

angular.module('fs3App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('inscription', {
        url: '/inscription',
        templateUrl: 'app/inscription/inscription.html',
        controller: 'InscriptionCtrl'
      });
  });