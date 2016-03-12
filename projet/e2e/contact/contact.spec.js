'use strict';

var config = browser.params;

describe('Test protractor pour le contact', function() {
  var page;
  beforeEach(function() {
    browser.get(config.baseUrl + '/contact');
  });
  it('Cela affiche une notification si le courriel est invalide', function() {

    element(by.className('emailInvalid')).isDisplayed().then(function(visible) {
      expect(visible).toBeFalsy();
    });

    element(by.model('user.email')).sendKeys('invalidEmail');
    element(by.model('user.agreeSign')).click();
    element(by.className('emailInvalid')).isDisplayed().then(function(visible) {
      expect(visible).toBeTruthy();
    });

  });
  it('Cela affiche une notification si on écrit pas de nom d utilisateur', function() {

    element(by.className('noUserName')).isDisplayed().then(function(visible) {
      expect(visible).toBeFalsy();
    });
    element(by.model('user.name')).click();
    element(by.model('user.email')).click();
    element(by.className('noUserName')).isDisplayed().then(function(visible) {
      expect(visible).toBeTruthy();
    });

  });
  it('Le formulaire est caché et affiche un message de succès si le formulaire est valide', function() {
    element(by.model('user.name')).sendKeys('John');

    var select = element(by.id('singleSelect'));
    select.$('[value="2"]').click();

    element(by.model('user.email')).sendKeys('John@gmail.com');

    element(by.model('user.agreeSign')).sendKeys('Allo');

    element(by.id('formSubmit')).click();
    element(by.id('success')).isDisplayed().then(function(visible) {
      expect(visible).toBeTruthy();
    });
  });
});
