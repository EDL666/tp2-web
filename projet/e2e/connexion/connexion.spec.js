'use strict';

var config = browser.params;

describe('Test protractor pour la connexion', function() {
  beforeEach(function() {
    browser.get(config.baseUrl + '/connexion');
  });
  it('Cela affiche une notification si on écrit pas de nom d utilisateur', function() {

    element(by.className('noUserName')).isDisplayed().then(function(visible) {
      expect(visible).toBeFalsy();
    });
    element(by.model('user.username')).click();
    element(by.model('user.password')).click();
    element(by.className('noUserName')).isDisplayed().then(function(visible) {
      expect(visible).toBeTruthy();
    });
  });

  it('Cela affiche une notification si le courriel est invalide', function() {

    element(by.className('emailInvalid')).isDisplayed().then(function(visible) {
      expect(visible).toBeFalsy();
    });
    element(by.model('user.username')).sendKeys('invalidEmail');
    element(by.model('user.password')).click();
    element(by.className('emailInvalid')).isDisplayed().then(function(visible) {
      expect(visible).toBeTruthy();
    });
  });


  it('La page est redirigé vers l acceuil si la connexion est réussi', function() {

    element(by.className('emailInvalid')).isDisplayed().then(function(visible) {
      expect(visible).toBeFalsy();
    });
    element(by.model('user.username')).sendKeys('eric@gmail.com');
    element(by.model('user.password')).sendKeys('aaaa');
    element(by.model('submitButton')).click();
    element(by.className('hero-unit')).isDisplayed().then(function(visible) {
      expect(visible).toBeTruthy();
    });
  });
});
