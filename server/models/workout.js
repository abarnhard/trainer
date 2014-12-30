'use strict';

var pg = require('../lib/postgres');

function Workout(){
}

Workout.addRegime = function(obj, cb){
  console.log(obj);
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

Workout.getWorkouts = function(obj, cb){
  pg.query('SELECT * FROM query_workouts($1,$2)', [obj.userId, obj.phaseId], function(err, results){
    cb(err, results.rows);
  });
};

module.exports = Workout;
