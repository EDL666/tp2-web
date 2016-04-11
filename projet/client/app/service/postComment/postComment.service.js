'use strict';

angular.module('fs3App')
  .service('postComment', function ($resource) {
    var apiUrl = 'https://crispesh.herokuapp.com/api';
    return $resource(apiUrl + '/comments');
    	        });