/* jshint camelcase:false */

'use strict';

var pg = require('../lib/postgres');

function Schedule(){
}

Schedule.addDay = function(obj, cb){
  // console.log(obj);
  var queryString = 'INSERT INTO days (start,workout_id,phase_id,user_id) VALUES ($1,$2,$3,$4) RETURNING id',
      params = [obj.date, obj.workoutId, obj.phaseId, obj.userId];
  pg.query(queryString, params, function(err, results){
    console.log(results);
    cb(err);
  });
};

Schedule.findAll = function(obj, cb){
  pg.query('SELECT * FROM query_schedule($1)', [obj.userId], function(err, results){
    cb(err, results.rows);
  });
};

module.exports = Schedule;
