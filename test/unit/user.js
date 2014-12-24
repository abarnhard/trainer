/* jshint expr:true */

'use strict';

var expect     = require('chai').expect,
    cp         = require('child_process'),
    h          = require('../helpers/helpers'),
    User       = require('../../server/models/user'),
    Lab        = require('lab'),
    lab        = exports.lab = Lab.script(),
    describe   = lab.describe,
    it         = lab.it,
    beforeEach = lab.beforeEach,
    db         = h.getdb();

describe('User', function(){
  beforeEach(function(done){
    cp.execFile(__dirname + '/../scripts/clean-db.sh', [db], {cwd:__dirname + '/../scripts'}, function(err, stdout, stderr){
      done();
    });
  });

  describe('constructor', function(){
    it('should create a User object', function(done){
      var user = new User({username:'bob', email:'bob@aol.com', password: '1234'});

      expect(user).to.be.instanceof(User);
      expect(user.username).to.equal('bob');
      done();
    });
  });

  describe('.register', function(){
    it('should register a new User', function(done){
      User.register({username:'sam', email:'sam@aol.com', password:'1234'}, function(err, user){
        expect(err).to.be.null;
        expect(user.username).to.equal('sam');
        done();
      });
    });
    it('should NOT register a new User - duplicate', function(done){
      User.register({username:'bob', email: 'bob@aol.com', password:'1234'}, function(err, user){
        expect(err).to.be.ok;
        expect(user).to.not.be.ok;
        done();
      });
    });
  });

  describe('.login', function(){
    it('should login a User', function(done){
      User.login({email:'bob@aol.com', password:'1234'}, function(err, user){
        expect(user.username).to.equal('bob');
        done();
      });
    });
    it('should NOT login a User - bad username', function(done){
      User.login({email:'wrong@wrong.com', password:'1234'}, function(err, user){
        expect(user).to.be.null;
        done();
      });
    });
    it('should NOT login a User - bad password', function(done){
      User.login({email:'bob@aol.com', password:'wrong'}, function(err, user){
        expect(user).to.be.null;
        done();
      });
    });
  });
});
