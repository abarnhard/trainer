/* jshint camelcase:false */

'use strict';

var pg    = require('../lib/postgres'),
    async = require('async');

function Workout(){
}

Workout.addRegime = function(obj, cb){
  // console.log(obj);
  pg.query('INSERT INTO regimes (name, user_id) VALUES ($1, $2)', [obj.name, obj.userId], function(err, results){
    cb(err);
  });
};

Workout.getRegimes = function(userId, cb){
  pg.query('SELECT * FROM regimes WHERE user_id=$1', [userId], function(err, results){
    // console.log(results);
    cb(err, results.rows);
  });
};

Workout.addPhase = function(obj, cb){
  pg.query('SELECT add_phase($1,$2,$3)', [obj.userId, obj.regimeId, obj.name], function(err, results){
    cb(err);
  });
};

Workout.getPhases = function(obj, cb){
  pg.query('SELECT * FROM query_phases($1,$2)', [obj.userId, obj.regimeId], function(err, results){
    cb(err, results.rows);
  });
};

Workout.addWorkout = function(obj, cb){
  console.log('addWorkout input:', obj); // log
  pg.query('SELECT add_workout($1,$2)', [obj.workout.name, obj.phaseId], function(err, results){
    var workoutId = results.rows[0].add_workout;
    console.log('add_workout', err, workoutId); // log

    async.eachSeries(obj.workout.groups, function(set, finished){
      console.log('set', set); // log

      pg.query('SELECT add_set($1,$2,$3)',[workoutId, set.count, set.rest],function(err, results){
        if(err){return finished(err);}

        var setId = results.rows[0].add_set;
        console.log('add_set', err, setId); // log
        async.each(set.exercises, function(exercise, done){
          console.log('exercise:', exercise); // log
          exercise.reps.type = parseInt(exercise.reps.type, 10);
          pg.query('SELECT add_exercise($1,$2,$3,$4,$5)', [setId, exercise.reps.type, exercise.reps.count, exercise.weight.lbs, exercise.name], function(err, results){
            done(err);
          });
        }, function(err){
          finished(err);
        });
      });
    }, function(err){
      cb(err);
    });

  });
};

Workout.getWorkouts = function(obj, cb){
  pg.query('SELECT * FROM query_workouts($1,$2)', [obj.userId, obj.phaseId], function(err, results){
    // cb(err, results.rows);
    cb(err);
  });
};

module.exports = Workout;
