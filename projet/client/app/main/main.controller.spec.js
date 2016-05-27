'use strict';

describe('MainController', function() {

  var httpBackend, myController, scope, response;
  var AppxResponse = {"tt1431045":"3.5",
              "tt2269724":"2",
              "tt2622240":"1",
              "tt2153366":"3",
              "tt4063610":"4.5",
              "tt4345262":"2.5",
              "tt4485182":"3.4",
              "tt4529214":"2.2",
              "tt4785560":"4.1",
              "tt5049520":"1.7"};
  var OmdbApiResponse = {"Title":"Deadpool","Year":"2016","Rated":"R","Released":"12 Feb 2016","Runtime":"108 min","Genre":"Action, Adventure, Comedy","Director":"Tim Miller","Writer":"Rhett Reese, Paul Wernick, Fabian Nicieza (character), Rob Liefeld (character)","Actors":"Ryan Reynolds, Karan Soni, Ed Skrein, Michael Benyaer","Plot":"A former Special Forces operative turned mercenary is subjected to a rogue experiment that leaves him with accelerated healing powers, adopting the alter ego Deadpool.","Language":"English","Country":"USA, Canada","Awards":"2 wins & 6 nominations.","Poster":"http://ia.media-imdb.com/images/M/MV5BMjQyODg5Njc4N15BMl5BanBnXkFtZTgwMzExMjE3NzE@._V1_SX300.jpg","Metascore":"65","imdbRating":"8.2","imdbVotes":"394,872","imdbID":"tt1431045","Type":"movie","Response":"True"}
  var APP_API_URL = 'https://appxapi.herokuapp.com/api';

  beforeEach(module('fs3App'));

  beforeEach(inject(function($controller,$rootScope,$httpBackend,$http) {
    // Récupère le service $httpBackend
    httpBackend = $httpBackend;
    scope = $rootScope;
    myController =  $controller('MainController', {'$scope' : scope,'$http' : $http});
  }));

  /*it('should send msg to server', function(){
    httpBackend.when('GET', 'https://www.omdbapi.com/?y=2016&s=batman&type=movie').respond(200, response);
    httpBackend.expect('GET', 'https://www.omdbapi.com/?y=2016&s=batman&type=movie');
    httpBackend.flush();
    expect(scope.movies).toEqual(response.Search);
  });*/

  it('should send a request to api/TopTen', function(){
    httpBackend.when('GET', APP_API_URL + '/TopTen' ).respond(200, AppxResponse);
    httpBackend.expect('GET', APP_API_URL + '/TopTen');

    var urlOmdbApi = 'https://www.omdbapi.com/?i=';
    var rjson = '&r=json';

    angular.forEach(AppxResponse, function(value , key)
    {
      httpBackend.when('GET', urlOmdbApi + key + rjson).respond(200, OmdbApiResponse);
      httpBackend.expect('GET', urlOmdbApi + key + rjson);
    });

    httpBackend.flush();
  });

  it('should send a request to api/TopTen when its not authorized', function(){
    httpBackend.when('GET', APP_API_URL + '/TopTen' ).respond(401, AppxResponse);
    httpBackend.expect('GET', APP_API_URL + '/TopTen');
    httpBackend.flush();
  });

});
