'use strict';

angular.module('fs3App')
  .service('contactService', function ($resource) {
    var apiUrl = 'https://crispesh.herokuapp.com/api';
    return $resource(apiUrl + '/contact');
    	        });
