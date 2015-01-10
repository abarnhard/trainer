'use strict';

describe('workouts index', function(){
  beforeEach(function(){
    loginAndGotoWorkouts();
  });

  it('should get workouts page', function(){
    expect(element(by.model('regime')).getAttribute('value')).toBeDefined();
  });

  it('should display regime & load phases for regime', function(){
    var regimeName = 'Test Regime 1 - Bob';

    selectOptionByText(regimeName);

    expect(element.all(by.css('select[ng-model="phase"] option')).count()).toBeGreaterThan(1);
    expect(element(by.css('form > fieldset > legend')).isDisplayed()).toBeTruthy();
    expect(element(by.css('form > fieldset > legend')).getText()).toEqual(regimeName);
  });

  it('should display a phase & all workouts for that phase', function(){
    var regimeName = 'Test Regime 1 - Bob',
        phaseName  = 'Test Phase 1';

    selectOptionByText(regimeName);
    selectOptionByText(phaseName);

    expect(element(by.css('form > fieldset > fieldset > legend')).isDisplayed()).toBeTruthy();
    expect(element(by.css('form > fieldset > fieldset > legend')).getText()).toEqual(phaseName);

    expect(element(by.css('form > fieldset > fieldset > fieldset > legend')).isDisplayed()).toBeTruthy();
    expect(element(by.css('form > fieldset > fieldset > fieldset > legend')).getText()).toMatch(/Workouts/);
    expect(element.all(by.repeater('workout in workouts')).count()).toBeGreaterThan(0);
  });

});

function selectOptionByText(text){
  element(by.cssContainingText('option', text)).click();
}

function loginAndGotoWorkouts(){
  browser.get('/#/login');
  element(by.model('user.email')).sendKeys('bob@aol.com');
  element(by.model('user.password')).sendKeys('1234');
  element(by.css('button[ng-click]')).click();
  browser.get('/#/workouts');
}
