/* jshint expr:true, -W079 */

'use strict';

var expect          = require('chai').expect,
    cp              = require('child_process'),
    h               = require('../helpers/helpers'),
    server          = require('../../server/index'),
    Lab             = require('lab'),
    FormData        = require('form-data'),
    streamToPromise = require('stream-to-promise'),
    fs              = require('fs'),
    lab             = exports.lab = Lab.script(),
    describe        = lab.describe,
    it              = lab.it,
    beforeEach      = lab.beforeEach,
    db              = h.getdb();

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

  describe('post /register', function(){
    it('should register a new User', function(done){
      var form = new FormData();
      form.append('email', 'sam2@aol.com');
      form.append('username', 'BigSam2');
      form.append('password', '1234');
      form.append('file', fs.createReadStream(__dirname + '/../fixtures/test.png'));
      streamToPromise(form).then(function(submitForm){
        // console.log(form);
        var options = {
              method: 'post',
              url: '/register',
              headers: form.getHeaders(),
              payload: submitForm
            };
        server.inject(options, function(res){
          // console.log(res);
          expect(res.statusCode).to.equal(200);
          expect(res.result.username).to.equal('BigSam2');
          done();
        });
      });
    });
  });

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
