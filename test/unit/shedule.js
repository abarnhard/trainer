/* jshint expr:true */

'use strict';

var expect     = require('chai').expect,
    cp         = require('child_process'),
    h          = require('../helpers/helpers'),
    Schedule   = require('../../server/models/schedule'),
    Lab        = require('lab'),
    lab        = exports.lab = Lab.script(),
    describe   = lab.describe,
    it         = lab.it,
    beforeEach = lab.beforeEach,
    db         = h.getdb();

describe('Schedule', function(){
  beforeEach(function(done){
    cp.execFile(__dirname + '/../scripts/clean-db.sh', [db], {cwd:__dirname + '/../scripts'}, function(err, stdout, stderr){
      if(err){console.log(err, stdout, stderr);}
      done();
    });
  });

  describe('.addDay', function(){
    it('should add a day to the database', function(done){
      var workoutId = 1,
          userId = 1,
          phaseId = 1,
          date = new Date(2015,1,1),
          input = {userId: userId, workoutId: workoutId, phaseId: phaseId, date:date};
      Schedule.addDay(input, function(err, id){
        expect(err).to.not.be.ok;
        expect(id).to.be.ok;
        done();
      });
    });
  });

  describe('.findAll', function(){
    it('should find all scheduled days for the user', function(done){
      var userId = 1,
          input = {userId:userId};
      Schedule.findAll(input, function(err, schedule){
        expect(schedule).to.have.length(2);
        done();
      });
    });
  });

  describe('.deleteDay', function(){
    it('should delete a day from the schedule', function(done){
      var userId = 1,
          dayId  = 1,
          input  = {userId:userId, dayId:dayId};
      Schedule.deleteDay(input, function(err, id){
        expect(err).to.not.be.ok;
        expect(id).to.equal(dayId);
        done();
      });
    });
    it('should NOT delete a day from the schedule (wrong user)', function(done){
      var userId = 2,
          dayId  = 1,
          input  = {userId:userId, dayId:dayId};
      Schedule.deleteDay(input, function(err, id){
        expect(err).to.not.be.ok;
        expect(id).to.not.be.ok;
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
