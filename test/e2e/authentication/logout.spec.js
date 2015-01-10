'use strict';

describe('logout', function(){
  it('should logout user', function(){
    browser.get('/#/login');
    element(by.model('user.email')).sendKeys('bob@aol.com');
    element(by.model('user.password')).sendKeys('1234');
    element(by.css('button[ng-click]')).click();
    expect(element(by.css('a[ui-sref="schedule"]')).isDisplayed()).toBeTruthy();
    element(by.css('li.has-dropdown > a')).click();
    expect(element(by.css('ul.dropdown')).isDisplayed()).toBeTruthy();
    element(by.css('a[ng-click="logout()"]')).click();
    expect(element(by.css('a[ui-sref="schedule"]')).isDisplayed()).toBeFalsy();
    expect(element(by.css('div[ui-view] h3')).getText()).toMatch(/Working out/);
  });
});
