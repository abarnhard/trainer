'use strict';

var h = require('../../helpers/helpers');

describe('register', function(){
  beforeEach(function(){
    browser.get('/#/register');
  });

  it('should get register page', function(){
    expect(element(by.css('div[ui-view] fieldset legend')).getText()).toEqual('Register');
  });

  it('should register a new user', function(){
    element(by.model('user.email')).sendKeys('sam' + h.random(5000) + '@aol.com');
    element(by.model('user.username')).sendKeys('sam' + h.random(5000));
    element(by.model('user.password')).sendKeys('4567');
    element(by.css('button[ng-click]')).click();
    expect(element(by.model('regime')).getAttribute('value')).toBeDefined();
  });
});
