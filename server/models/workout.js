'use strict';

var pg = require('../lib/postgres');

function Workout(){
}

Workout.addRegime = function(obj, cb){
  console.log(obj);
  cb();
};

module.exports = Workout;