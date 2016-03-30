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

    element(by.model('user.email')).sendKeys('invalidEmail');
    element(by.model('user.firstName')).click();
    element(by.className('emailInvalid')).isDisplayed().then(function(visible) {
      expect(visible).toBeTruthy();
    });

  });
  it('Cela affiche une notification si on écrit pas de nom d utilisateur', function() {

    element(by.className('noUserName')).isDisplayed().then(function(visible) {
      expect(visible).toBeFalsy();
    });
    element(by.model('user.lastname')).click();
    element(by.model('user.email')).click();
    element(by.className('noUserName')).isDisplayed().then(function(visible) {
      expect(visible).toBeTruthy();
    });
  });
  it('Le formulaire est caché et affiche un message de succès si le formulaire est valide', function() {
    element(by.model('user.firstName')).sendKeys('John');
    element(by.model('user.name')).sendKeys('Smith');
    element(by.model('user.email')).sendKeys('John@gmail.com');
    element(by.model('user.password')).sendKeys('coucou');
    element(by.model('user.confirmPassword')).sendKeys('coucou');
    element(by.id('formSubmit')).click();
    element(by.className('css-form')).isDisplayed().then(function(visible) {
      expect(visible).toBeFalsy();
    });
    element(by.id('success')).isDisplayed().then(function(visible) {
      expect(visible).toBeTruthy();
    });

  });
});
