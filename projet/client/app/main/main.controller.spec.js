'use strict';

describe('MainController', function() {

  var httpBackend, myController, scope, response;
  response = {"Search":[{"Title":"Batman & Jesus","Year":"2016","imdbID":"tt5070262","Type":"movie","Poster":"N/A"},{"Title":"Batman vs Superman: Next Generation","Year":"2016","imdbID":"tt5241796","Type":"movie","Poster":"N/A"},{"Title":"Batman V Arrow","Year":"2016","imdbID":"tt5479456","Type":"movie","Poster":"N/A"}],"totalResults":"11","Response":"True"};

  beforeEach(module('fs3App'));

  beforeEach(inject(function($controller,$rootScope,$httpBackend,$http) {
    // Récupère le service $httpBackend
    httpBackend = $httpBackend;
    scope = $rootScope;

    myController =  $controller('MainController', {'$scope' : scope,'$http' : $http});
  }));

  it('should send msg to server', function(){
    httpBackend.when('GET', 'https://www.omdbapi.com/?y=2016&s=batman&type=movie').respond(200, response);
    httpBackend.expect('GET', 'https://www.omdbapi.com/?y=2016&s=batman&type=movie');
    httpBackend.flush();
    expect(scope.movies).toEqual(response.Search);
  });
});
