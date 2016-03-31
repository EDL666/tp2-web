'use strict';

var app = angular.module('fs3App');

app.service('Post', function ($resource) {
    var restAPIUrl = 'https://crispesh.herokuapp.com/api/register';
    return $resource(restAPIUrl);
  });
