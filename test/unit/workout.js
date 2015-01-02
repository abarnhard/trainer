/* jshint expr:true */

'use strict';

var expect     = require('chai').expect,
    cp         = require('child_process'),
    h          = require('../helpers/helpers'),
    Workout    = require('../../server/models/workout'),
    Lab        = require('lab'),
    lab        = exports.lab = Lab.script(),
    describe   = lab.describe,
    it         = lab.it,
    beforeEach = lab.beforeEach,
    db         = h.getdb();

describe('Workout', function(){
  beforeEach(function(done){
    cp.execFile(__dirname + '/../scripts/clean-db.sh', [db], {cwd:__dirname + '/../scripts'}, function(err, stdout, stderr){
      if(err){console.log(err, stdout, stderr);}
      done();
    });
  });

  describe('constructor', function(){
    it('should create a Workout object', function(done){
      var wk = new Workout();
      expect(wk).to.be.instanceof(Workout);
      done();
    });
  });

  describe('.addRegime', function(){
    it('should create a new regime', function(done){
      var input = {name:'Regime Unit Test', userId:1};
      Workout.addRegime(input, function(err){
        expect(err).to.not.be.ok;
        done();
      });
    });
    it('should NOT create a new regime (duplicate name)', function(done){
      var input = {name:'Test Regime 1 - Bob', userId:1};
      Workout.addRegime(input, function(err){
        expect(err).to.be.ok;
        done();
      });
    });
  });

  describe('.getRegimes', function(){
    it('should return all regimes for a user', function(done){
      var userId = 1;
      Workout.getRegimes(userId, function(err, regimes){
        expect(regimes).to.have.length(1);
        expect(regimes[0].name).to.equal('Test Regime 1 - Bob');
        done();
      });
    });
  });

  describe('.addPhase', function(){
    it('should add a new phase to regime', function(done){
      var input = {userId:1,regimeId:1,name:'phase unit test'};
      Workout.addPhase(input, function(err){
        expect(err).to.not.be.ok;
        done();
      });
    });
    it('should NOT add a new phase to regime (duplicate name)', function(done){
      var input = {userId:1,regimeId:1,name:'Test Phase 1'};
      Workout.addPhase(input, function(err){
        expect(err).to.be.ok;
        done();
      });
    });
  });

  describe('.getPhases', function(){
    it('should return all phases in regime', function(done){
      var input = {userId:1,regimeId:1};
      Workout.getPhases(input, function(err, phases){
        expect(phases).to.have.length(3);
        expect(phases[0].name).to.equal('Test Phase 1');
        done();
      });
    });
  });

});
/*
  describe('', function(){
    it('should ', function(done){

    });
  });
*/
