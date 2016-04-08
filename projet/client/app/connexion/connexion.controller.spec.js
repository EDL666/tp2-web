'use strict';

describe('ConnexionCtrl test', function () {

  // load the controller's module
  beforeEach(module('fs3App'));

  var ConnexionCtrl, scope, httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
    scope = $rootScope;
    httpBackend = $httpBackend;
    ConnexionCtrl = $controller('ConnexionCtrl', {
      $scope: scope
    });
  }));

  it('should connect and get a response 200 when its correct', function () {
    var user = {
    };
    user.username = 'eric@gmail.com';
    user.password = 'aaaa';
    scope.connexion(user);
    httpBackend.when('POST', 'https://crispesh.herokuapp.com/api/login_check').respond(200);
    httpBackend.expect('POST', 'https://crispesh.herokuapp.com/api/login_check');
    httpBackend.flush();
  });

  it('should not connect and get a response 401 when its not correct', function () {
    var user = {
    };
    var response = {"code":401,"message":"Bad credentials"};
    user.username = 'eric@gmail.com';
    user.password = 'aaaaaaaaa';
    scope.connexion(user);
    httpBackend.when('POST', 'https://crispesh.herokuapp.com/api/login_check').respond(401,response);
    httpBackend.expect('POST', 'https://crispesh.herokuapp.com/api/login_check');
    httpBackend.flush();
    expect(response).toEqual(scope.error.data);
  });
});
