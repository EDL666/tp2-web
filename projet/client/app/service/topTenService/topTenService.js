'use strict';

angular.module('fs3App')
  .service('topTenService', function ($resource, APP_API_URL) {
    return $resource(APP_API_URL + '/TopTen');
  });
