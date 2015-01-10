'use strict';

describe('login', function(){
  beforeEach(function(){
    browser.get('/#/login');
  });

  it('should get login page', function(){
    expect(element(by.css('div[ui-view] fieldset legend')).getText()).toEqual('Login');
  });

  it('should login user', function(){
    element(by.model('user.email')).sendKeys('bob@aol.com');
    element(by.model('user.password')).sendKeys('1234');
    element(by.css('button[ng-click]')).click();
    expect(element(by.model('regime')).getAttribute('value')).toBeDefined();
  });

  it('should not login user', function(){
    element(by.model('user.email')).sendKeys('bob@gmail.com');
    element(by.model('user.password')).sendKeys('123');
    element(by.css('button[ng-click]')).click();
    expect(element(by.css('div[ui-view] fieldset legend')).getText()).toEqual('Login');
  });
});
