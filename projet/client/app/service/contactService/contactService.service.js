'use strict';

angular.module('fs3App')
  .service('contactService', function ($resource, APP_API_URL) {
    return $resource(APP_API_URL + '/contact');
  });
