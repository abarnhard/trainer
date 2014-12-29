'use strict';

var Joi     = require('joi'),
    Workout = require('../../../models/workout');

module.exports = {
  description: 'Create a regime',
  tags:['workouts'],
  validate: {
    payload: {
      name: Joi.string().min(1).max(255).required()
    }
  },
  handler: function(request, reply){
    request.payload.userId = request.auth.credentials.id;
    Workout.addRegime(request.payload, function(err){
      if(err){console.log('ERROR: Workout.addRegime', err);}
      reply().code(err ? 418 : 200);
    });
  }
};
