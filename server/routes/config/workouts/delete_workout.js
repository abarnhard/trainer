'use strict';

var Workout = require('../../../models/workout'),
    Joi     = require('joi');

module.exports = {
  description: 'Delete a workout',
  tags:['workouts'],
  validate: {
    params: {
      id: Joi.number().min(1).required()
    }
  },
  handler: function(request, reply){
    var params = {userId:request.auth.credentials.id, workoutId: request.params.id};
    Workout.deleteWorkout(params, function(err, id){
      if(err){console.log('ERROR: Workout.deleteWorkout', err);}
      reply({workoutId:id}).code(err ? 418 : 200);
    });
  }
};
