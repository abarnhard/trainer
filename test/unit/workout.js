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

  describe('.addWorkout', function(){
    it('should add a new workout to a phase', function(done){
      var input = {
        phaseId: 1,
        workout: {
          name:'Workout Unit Test',
          groups: [
            {
              count: 1,
              rest: 90,
              exercises: [{
                reps: {
                  count: 15,
                  type: '1'
                },
                weight: {
                  lbs: 0,
                  type: '2'
                },
                name: 'Unit Test Exercise'
              }]
            }
          ]
        }
      };

      Workout.addWorkout(input, function(err, workoutId){
        expect(err).to.not.be.ok;
        expect(workoutId).to.be.above(1);
        done();
      });
    });
  });

  describe('.getWorkouts', function(){
    it('should return all workouts in a phase', function(done){
      var input = {userId: 1, phaseId: 1};
      Workout.getWorkouts(input, function(err, workouts){
        expect(workouts).to.have.length(2);

        var wk = workouts[0];
        // console.log(workouts);
        expect(wk.workoutName).to.equal('Test Workout 1');
        expect(wk.sets).to.have.length(2);

        var set = wk.sets[0];
        expect(set.rest).to.equal(0);
        expect(set.exercises).to.have.length(2);
        done();
      });
    });
  });

  describe('.deleteWorkout', function(){
    it('should delete a workout', function(done){
      var workoutId = 1,
          input = {userId: 1, workoutId: workoutId};
      Workout.deleteWorkout(input, function(err, id){
        expect(err).to.not.be.ok;
        expect(id).to.equal(workoutId);
        done();
      });
    });
  });

  describe('.findByDay', function(){
    it('should find the workout for a specific day', function(done){
      var dayId = 1,
          input = {dayId: dayId};
      Workout.findByDay(input, function(err, workout){
        expect(err).to.not.be.ok;
        expect(workout.sets).to.have.length(2);
        done();
      });
    });
  });

  describe('.findById', function(){
    it('should find a workout by it\'s Id', function(done){
      var wkId = 1,
          input = {wkId: wkId};

      Workout.findById(input, function(err, wk){
        expect(err).to.not.be.ok;
        expect(wk.sets).to.have.length(2);
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
