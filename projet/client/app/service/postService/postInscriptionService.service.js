'use strict';

var app = angular.module('fs3App');

app.service('PostInscriptionService',  function ($resource, APP_API_URL) {
    return $resource(APP_API_URL + '/register');
  });
