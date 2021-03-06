'use strict';

angular.module('fs3App', [
  'fs3App.constants',
  'toastr',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'angular-jwt',
  'btford.socket-io'
]).constant('APP_API_URL', 'https://appxapi.herokuapp.com/api')
.factory('mySocket', function (socketFactory) {
  var myIoSocket = io.connect('http://atomracechat.herokuapp.com/');
  var mySocket = socketFactory({
    ioSocket: myIoSocket
  });
  return mySocket;
})
  .config(function($urlRouterProvider, $locationProvider,$httpProvider, jwtInterceptorProvider) {
    $urlRouterProvider.otherwise('/');
    jwtInterceptorProvider.tokenGetter = function(config, jwtHelper) {

    // Do not use token to get .html templates
    if (config.url.substr(config.url.length - 5) === '.html' ||
        config.url.indexOf('/api/') === -1
      )
    {
      return null;
    }

    var jwt = localStorage.getItem('JWT');
    if(jwt === null)
    {
      return null;
    }

    if (jwtHelper.isTokenExpired(jwt))
    {
      console.log("Token Expired !", jwtHelper.getTokenExpirationDate(jwt));
    }
    else
    {
      console.log("Token not expired", jwtHelper.getTokenExpirationDate(jwt));
      return jwt;
    }
  };

  $httpProvider.interceptors.push('jwtInterceptor');

  $locationProvider.html5Mode(true);
  });
