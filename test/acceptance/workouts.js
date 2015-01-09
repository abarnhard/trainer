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

describe('Workouts', function(){
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

  describe('get /regimes', function(){
    it('should return all regimes for user', function(done){
      var options = {
        method: 'get',
        url: '/regimes',
        headers:{
          cookie:cookie
        }
      };

      server.inject(options, function(res){
        console.log(res.result);
        expect(res.statusCode).to.equal(200);
        expect(res.result.regimes).to.have.length(1);
        expect(res.result.regimes[0].name).to.equal('Test Regime 1 - Bob');
        done();
      });
    });
  });

  describe('post /regimes', function(){
    it('should create a new regime for the user', function(done){
      var options = {
        method: 'post',
        url: '/regimes',
        payload: {
          name: 'Test Regime 2'
        },
        headers:{
          cookie:cookie
        }
      };

      server.inject(options, function(res){
        expect(res.statusCode).to.equal(200);
        // console.log(res.result);
        done();
      });
    });
  });

  describe('get /regimes/{rid}/phases', function(){
    it('should return all phaes for a regime', function(done){
      var options = {
        method: 'get',
        url: '/regimes/1/phases',
        headers:{
          cookie:cookie
        }
      };

      server.inject(options, function(res){
        expect(res.statusCode).to.equal(200);
        expect(res.result.phases).to.have.length(3);
        done();
      });
    });
  });

  describe('post /phases', function(){
    it('should create a new phase in a regime', function(done){
      var options = {
        method: 'post',
        url: '/phases',
        payload: {
          name: 'Test Phase Accept',
          regimeId: 1
        },
        headers:{
          cookie:cookie
        }
      };

      server.inject(options, function(res){
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe('get /phases/{id}/workouts', function(){
    it('should return all workouts for a phase', function(done){
      var options = {
        method: 'get',
        url: '/phases/1/workouts',
        headers:{
          cookie:cookie
        }
      };

      server.inject(options, function(res){
        expect(res.statusCode).to.equal(200);
        expect(res.result.workouts).to.have.length(2);
        // console.log(res.result);
        done();
      });
    });
  });

  describe('get /workouts/day/{id}', function(){
    it('should return the workout for a specific day', function(done){
      var options = {
        method: 'get',
        url: '/workouts/day/1',
        headers:{
          cookie:cookie
        }
      };

      server.inject(options, function(res){
        expect(res.result.workout.workoutName).to.equal('Test Workout 1');
        done();
      });
    });
  });

  describe('post /workouts', function(){
    it('should create a new workout', function(done){
      var options = {
        method: 'post',
        url: '/workouts',
        payload: {
          workout: {
            groups: [
              {
                count: 1,
                exercises: [
                  {
                    reps: {type:'3', count: 0},
                    weight: {type:'2', lbs:0},
                    name: 'Test'
                  }
                ],
                rest:0
              }
            ],
            name: 'Temp'
          },
          phaseId: 1
        },
        headers:{
          cookie:cookie
        }
      };

      server.inject(options, function(res){
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe('get /workouts/{id}', function(){
    it('should return a workout by its id', function(done){
      var options = {
        method: 'get',
        url: '/workouts/1',
        headers:{
          cookie:cookie
        }
      };

      server.inject(options, function(res){
        expect(res.result.workout.workoutName).to.equal('Test Workout 1');
        done();
      });
    });
  });

  describe('delete /workouts/{id}', function(){
    it('should delete a workout from the database', function(done){
      var options = {
        method: 'delete',
        url: '/workouts/1',
        headers:{
          cookie:cookie
        }
      };

      server.inject(options, function(res){
        expect(res.result.workoutId).to.equal(1);
        done();
      });
    });
  });

});

/*
  describe('', function(){
    it('should ', function(done){
      var options = {
        method: '',
        url: '/',
        payload: {
        },
        headers:{
          cookie:cookie
        }
      };

      server.inject(options, function(res){

      });
    });
  });
*/
