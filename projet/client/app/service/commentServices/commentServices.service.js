'use strict';

angular.module('fs3App')
  .service('commentServices', function ($resource, APP_API_URL) {
	return $resource(APP_API_URL + '/comments/:id', { id: '@id' }, { update: {method: 'PUT'}});
});
