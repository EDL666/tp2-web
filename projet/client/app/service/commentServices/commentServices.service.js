'use strict';

angular.module('fs3App')
  .service('commentServices', function ($resource) {
    var apiUrl = 'https://crispesh.herokuapp.com/api';
	return $resource(apiUrl + '/comments/:id', { id: '@id' }, { update: {method: 'PUT'}});
  });
