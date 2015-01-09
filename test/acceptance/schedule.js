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

  describe('post /workouts/schedule', function(){
    it('should add a day record to the database', function(done){
      var options = {
        method: 'post',
        url: '/workouts/schedule',
        payload: {
          workoutId:1,
          phaseId:1,
          date: '2015-01-03T06:00:00.000Z'
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

  describe('get /workouts/schedule', function(){
    it('should return all scheduled days', function(done){
      var options = {
        method: 'get',
        url: '/workouts/schedule',
        headers:{
          cookie:cookie
        }
      };

      server.inject(options, function(res){
        expect(res.result.schedule).to.have.length(2);
        done();
      });
    });
  });

  describe('get /workouts/schedule/{date}', function(){
    it('should return the day record for a specific date', function(done){
      var options = {
        method: 'get',
        url: '/workouts/schedule/2015-01-01',
        headers:{
          cookie:cookie
        }
      };

      server.inject(options, function(res){
        expect(res.result.day.title).to.equal('Test Phase 1 - Test Workout 1');
        done();
      });
    });
  });

  describe('post /workouts/schedule/day/done', function(){
    it('should mark a day record as complete in database', function(done){
      var options = {
        method: 'post',
        url: '/workouts/schedule/day/done',
        payload: {
          dayId: 1
        },
        headers:{
          cookie:cookie
        }
      };

      server.inject(options, function(res){
        expect(res.result.dayId).to.equal(1);
        done();
      });
    });
  });

  describe('delete /workouts/day/{id}', function(){
    it('should remove a day record from the database', function(done){
      var options = {
        method: 'delete',
        url: '/workouts/day/1',
        headers:{
          cookie:cookie
        }
      };

      server.inject(options, function(res){
        expect(res.result.dayId).to.equal(1);
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
