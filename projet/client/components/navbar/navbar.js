'use strict';

angular.module('fs3App')
  .config(function($stateProvider) {
    $stateProvider
      .state('navbar', {
        url: '/',
        templateUrl: 'components/navbar/navbar.html',
        controller: 'NavbarController',
        controllerAs: 'navbar'
      });
  });
