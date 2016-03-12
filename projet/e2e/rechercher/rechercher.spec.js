'use strict';

var config = browser.params;

describe('Test protractor pour les recherches', function() {

  beforeEach(function() {
    browser.get(config.baseUrl + '/rechercher');
  });
  it('Les recherches affiche des films lorsqu on fait une recherche', function() {
    element(by.model('searchClause')).sendKeys('batman');
    element(by.id('formSubmit')).click();
    element.all(by.repeater('movie in movies')).count().then(function(count) {
    expect(count).toEqual(10);
    });
  });
});
