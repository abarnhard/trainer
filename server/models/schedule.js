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
    var id;
    if(!err){id = results.rows[0].id;}
    cb(err, id);
  });
};

Schedule.findAll = function(obj, cb){
  pg.query('SELECT * FROM query_schedule($1)', [obj.userId], function(err, results){
    var schedule = convertDatesToStrings(results.rows);
    cb(err, schedule);
  });
};

Schedule.deleteDay = function(obj, cb){
  pg.query('SELECT delete_day($1,$2)', [obj.userId,obj.dayId], function(err, results){
    var id = (results || {rows:[{}]}).rows[0].delete_day;
    cb(err, id);
  });
};

module.exports = Schedule;

// HELPER FUNCTIONS //
function convertDatesToStrings(events){
  return events.map(function(e){
    e.start = e.start.getFullYear() + '-' + format(e.start.getMonth(), 'm') + '-' + format(e.start.getDate(), 'd');
    return e;
  });
}

function format(d, type){
  if(type === 'm'){d += 1;}
  d = d.toString();
  if(d.length < 2){d = '0' + d;}
  return d;
}
