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
    console.log(results);
    cb(err, results.rows);
  });
};

module.exports = Workout;
