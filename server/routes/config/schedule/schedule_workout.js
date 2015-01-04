'use strict';

var Joi      = require('joi'),
    Schedule = require('../../../models/schedule');

module.exports = {
  description: 'Schedule a workout',
  tags:['workouts', 'schedule'],
  validate: {
    payload: {
      workoutId: Joi.number().min(1).required(),
      phaseId: Joi.number().min(1).required(),
      date: Joi.date().required()
    }
  },
  handler: function(request, reply){
    request.payload.userId = request.auth.credentials.id;
    Schedule.addDay(request.payload, function(err){
      if(err){console.log('ERROR: Workout.addWorkout', err);}
      reply().code(err ? 418 : 200);
    });
  }
};
