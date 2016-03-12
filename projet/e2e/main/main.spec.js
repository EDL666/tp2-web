'use strict';

var config = browser.params;

describe('Test protractor pour la page d acceuil', function() {
  var page;

  beforeEach(function() {
    browser.get(config.baseUrl + '/');
    page = require('./main.po');
  });
  it('La page d acceuil affiche 6 films de l année 2016 avec le titre du film et sa photo si elle est disponible', function() {
    element.all(by.repeater('movie in movies')).count().then(function(count) {
    expect(count).toEqual(6);
    });
  });
});
