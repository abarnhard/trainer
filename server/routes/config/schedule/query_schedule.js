'use strict';

var Schedule = require('../../../models/schedule');

module.exports = {
  description: 'Get all scheduled workouts for user',
  tags:['workouts', 'schedule'],
  cors:{origin: ['http://localhost:8100'],credentials: true},
  handler: function(request, reply){
    var params = {userId:request.auth.credentials.id};
    Schedule.findAll(params, function(err, schedule){
      if(err){console.log('ERROR: Workout.getPhases', err);}
      reply({schedule:schedule}).code(err ? 418 : 200);
    });
  }
};
