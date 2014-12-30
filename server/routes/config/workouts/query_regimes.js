'use strict';

var Workout = require('../../../models/workout');

module.exports = {
  description: 'Get all regimes',
  tags:['workouts'],
  handler: function(request, reply){
    Workout.getRegimes(request.auth.credentials.id, function(err, regimes){
      if(err){console.log('ERROR: Workout.getRegimes', err);}
      reply({regimes:regimes}).code(err ? 418 : 200);
    });
  }
};
