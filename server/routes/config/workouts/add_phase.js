'use strict';

var Joi     = require('joi'),
    Workout = require('../../../models/workout');

module.exports = {
  description: 'Create a phase',
  tags:['phases'],
  validate: {
    payload: {
      name: Joi.string().min(1).max(255).required(),
      regimeId: Joi.number().min(1).required()
    }
  },
  handler: function(request, reply){
    request.payload.userId = request.auth.credentials.id;
    Workout.addPhase(request.payload, function(err){
      if(err){console.log('ERROR: Workout.addPhase', err);}
      reply().code(err ? 418 : 200);
    });
  }
};
