'use strict';

describe('MainController test karma', function() {
  var httpBackend, createController,scope, response;
  response = {"Search":[{"Title":"Batman & Jesus","Year":"2016","imdbID":"tt5070262","Type":"movie","Poster":"N/A"},{"Title":"Batman vs Superman: Next Generation","Year":"2016","imdbID":"tt5241796","Type":"movie","Poster":"N/A"},{"Title":"Batman V Arrow","Year":"2016","imdbID":"tt5479456","Type":"movie","Poster":"N/A"}],"totalResults":"11","Response":"True"};
  beforeEach(module('fs3App'));
  beforeEach(inject(function($controller,$rootScope,$httpBackend) {
    // Récupère le service $httpBackend
    httpBackend = $httpBackend;
    scope = $rootScope.$new();
    createController = $controller('MainController', {'$scope' : scope});

  }));

  it('should send msg to server', function(){
    httpBackend.when('GET', 'https://www.omdbapi.com/?y=2016&s=batman&type=movie').respond(200, response);
    httpBackend.expect('GET', 'https://www.omdbapi.com/?y=2016&s=batman&type=movie');
    httpBackend.flush();
    expect(createController.$scope.movies).toEqual(response.Search);
    httpBackend.flush();
  });
});
