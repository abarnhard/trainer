'use strict';

describe('workouts index', function(){
  beforeEach(function(){
    loginAndGotoWorkouts();
  });

  it('should get workouts page', function(){
    expect(element(by.model('regime')).getAttribute('value')).toBeDefined();
  });

  it('should display regime & load phases for regime', function(){
    element(by.cssContainingText('option', 'Test Regime 1 - Bob')).click();
    expect(element.all(by.css('select[ng-model="phase"] option')).count()).toBeGreaterThan(1);
    expect(element(by.css('form > fieldset > legend')).isDisplayed()).toBeTruthy();
  });

});

function loginAndGotoWorkouts(){
  browser.get('/#/login');
  element(by.model('user.email')).sendKeys('bob@aol.com');
  element(by.model('user.password')).sendKeys('1234');
  element(by.css('button[ng-click]')).click();
  browser.get('/#/workouts');
}
