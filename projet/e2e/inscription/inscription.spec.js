'use strict';

var config = browser.params;

describe('Test protractor pour l inscription', function() {
  beforeEach(function() {
    browser.get(config.baseUrl + '/inscription');
  });
  it('Cela affiche une notification si le courriel est invalide', function() {

    element(by.className('emailInvalid')).isDisplayed().then(function(visible) {
      expect(visible).toBeFalsy();
    });

    element(by.model('userEmail')).sendKeys('invalidEmail');
    element(by.model('userFirstName')).click();
    element(by.className('emailInvalid')).isDisplayed().then(function(visible) {
      expect(visible).toBeTruthy();
    });

  });
  it('Cela affiche une notification si on écrit pas de nom d utilisateur', function() {

    element(by.className('noUserName')).isDisplayed().then(function(visible) {
      expect(visible).toBeFalsy();
    });
    element(by.model('userLastname')).click();
    element(by.model('userEmail')).click();
    element(by.className('noUserName')).isDisplayed().then(function(visible) {
      expect(visible).toBeTruthy();
    });
  });
  it('Le formulaire est caché et affiche un message de succès si le formulaire est valide', function() {
    element(by.model('userFirstName')).sendKeys('John');
    element(by.model('userLastname')).sendKeys('Smith');
    element(by.model('userEmail')).sendKeys('John@gmail.com');
    element(by.model('userPassword')).sendKeys('coucou');
    element(by.model('confirmPassword')).sendKeys('coucou');
    element(by.id('formSubmit')).click();
    element(by.className('css-form')).isDisplayed().then(function(visible) {
      expect(visible).toBeFalsy();
    });
    element(by.id('success')).isDisplayed().then(function(visible) {
      expect(visible).toBeTruthy();
    });

  });
});
