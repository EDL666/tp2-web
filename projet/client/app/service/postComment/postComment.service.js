'use strict';

angular.module('fs3App')
  .service('postComment', function ($resource, APP_API_URL) {
    return $resource(APP_API_URL + '/comments');
  });
