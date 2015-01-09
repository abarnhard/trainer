/* jshint expr:true */

'use strict';

var expect     = require('chai').expect,
    cp         = require('child_process'),
    h          = require('../helpers/helpers'),
    server     = require('../../server/index'),
    Lab        = require('lab'),
    lab        = exports.lab = Lab.script(),
    describe   = lab.describe,
    it         = lab.it,
    beforeEach = lab.beforeEach,
    db         = h.getdb();

describe('Users', function(){
  var cookie;

  beforeEach(function(done){
    cp.execFile(__dirname + '/../scripts/clean-db.sh', [db], {cwd:__dirname + '/../scripts'}, function(err, stdout, stderr){
      var options = {
        method: 'post',
        url: '/login',
        payload: {
          email: 'bob@aol.com',
          password: '1234'
        }
      };

      server.inject(options, function(response){
        cookie = response.headers['set-cookie'][0].match(/hapi-cookie=[^;]+/)[0];
        done();
      });
    });
  });
  /* // Need to figure out how to mock form post
  describe('post /register', function(){
    it('should register a new User', function(done){
      var options = {
        method: 'post',
        url: '/register',
        headers: {},
        payload: '------WebKitFormBoundaryoNzzeFLdoHoXxySX'+String.fromCharCode(13,10)+
                 'Content-Disposition: form-data; name="email"'+String.fromCharCode(13,10)+
                 String.fromCharCode(13,10)+
                 'jim@gmail.com'+String.fromCharCode(13,10)+
                 '------WebKitFormBoundaryoNzzeFLdoHoXxySX'+String.fromCharCode(13,10)+
                 'Content-Disposition: form-data; name="username"'+String.fromCharCode(13,10)+
                  String.fromCharCode(13,10)+
                  'Jim'+String.fromCharCode(13,10)+
                  '------WebKitFormBoundaryoNzzeFLdoHoXxySX'+String.fromCharCode(13,10)+
                  'Content-Disposition: form-data; name="password"'+String.fromCharCode(13,10)+
                  String.fromCharCode(13,10)+
                  '1234'+String.fromCharCode(13,10)+
                  '------WebKitFormBoundaryoNzzeFLdoHoXxySX'+String.fromCharCode(13,10)+
                  'Content-Disposition: form-data; name="file"; filename="test.png"'+String.fromCharCode(13,10)+
                  'Content-Type: image/png'+String.fromCharCode(13,10)+
                  String.fromCharCode(13,10)+
                  String.fromCharCode(13,10)+
                  '------WebKitFormBoundaryoNzzeFLdoHoXxySX--'
      };
      options.headers['Content-Type'] = 'multipart/form-data; boundary=----WebKitFormBoundaryoNzzeFLdoHoXxySX';
      options.headers['Content-Length'] = 713;
      server.inject(options, function(response){
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });
  */
  describe('post /login', function(){
    it('should login a User', function(done){
      var options = {
        method: 'post',
        url: '/login',
        payload: {
          email: 'bob@aol.com',
          password: '1234'
        }
      };

      server.inject(options, function(response){
        expect(response.statusCode).to.equal(200);
        expect(response.result.username).to.equal('bob');
        done();
      });
    });
  });

  describe('delete /logout', function(){
    it('should logout a User', function(done){
      var options = {
        method: 'delete',
        url: '/logout',
        headers:{
          cookie:cookie
        }
      };

      server.inject(options, function(response){
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe('get /status', function(){
    it('should get status for a user', function(done){
      var options = {
        method: 'get',
        url: '/status',
        headers:{
          cookie:cookie
        }
      };

      server.inject(options, function(response){
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });
});
