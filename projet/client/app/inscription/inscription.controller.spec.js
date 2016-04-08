'use strict';

describe('InscriptionCtrl test', function () {

  // load the controller's module
  beforeEach(module('fs3App'));

  var InscriptionCtrl, scope, httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
    scope = $rootScope;
    httpBackend = $httpBackend;
    InscriptionCtrl = $controller('InscriptionCtrl', {
      $scope: scope
    });
  }));

  it('should create a user and get a response 200 when its correct', function () {
    var user = {
    };
    scope.userEmail = 'a@a.aa';
    scope.userPassword = 'aaaa';
    scope.userFirstName = 'Eric';
    scope.userLastname = 'Rakotoseheno';
    scope.update();
    httpBackend.when('POST', 'https://crispesh.herokuapp.com/api/register').respond(200);
    httpBackend.expect('POST', 'https://crispesh.herokuapp.com/api/register');
    httpBackend.flush();
  });

  it('should not create a user and get a response 410 when its already used', function () {
    var response = {"code":410,"message":"Validation Failed","errors":[{"property_path":"email","message":"Cette valeur est d\u00e9j\u00e0 utilis\u00e9e."}]};
    scope.userEmail = 'eric@gmail.com';
    scope.userPassword = 'aaaa';
    scope.userFirstName = 'Eric';
    scope.userLastname = 'Rakotoseheno';
    scope.update();
    httpBackend.when('POST', 'https://crispesh.herokuapp.com/api/register').respond(410,response);
    httpBackend.expect('POST', 'https://crispesh.herokuapp.com/api/register');
    console.log(scope.error);
    httpBackend.flush();
    expect(response).toEqual(scope.error.data);
  });




});
