'use strict';

var Joi     = require('joi'),
    Workout = require('../../../models/workout');

module.exports = {
  description: 'Create a new workout',
  tags:['workouts'],
  validate: {
    payload: {
      phaseId: Joi.number().min(1).required(),
      workout: Joi.object().required()
    }
  },
  handler: function(request, reply){
    request.payload.userId = request.auth.credentials.id;
    Workout.addWorkout(request.payload, function(err){
      if(err){console.log('ERROR: Workout.addWorkout', err);}
      reply().code(err ? 418 : 200);
    });
  }
};
