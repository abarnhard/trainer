'use strict';

var Workout = require('../../../models/workout'),
    Joi     = require('joi');

module.exports = {
  description: 'Get all workouts for a phase',
  tags:['workouts'],
  validate: {
    params: {
      id: Joi.number().min(1).required()
    }
  },
  handler: function(request, reply){
    var params = {userId:request.auth.credentials.id, phaseId: request.params.id};
    Workout.getWorkouts(params, function(err, workouts){
      if(err){console.log('ERROR: Workout.getWorkouts', err);}
      reply({workouts:workouts}).code(err ? 418 : 200);
    });
  }
};
