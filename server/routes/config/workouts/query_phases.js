'use strict';

var Workout = require('../../../models/workout'),
    Joi     = require('joi');

module.exports = {
  description: 'Get all phases for a regime',
  tags:['workouts'],
  validate: {
    params: {
      rid: Joi.number().min(1).required()
    }
  },
  handler: function(request, reply){
    var params = {userId:request.auth.credentials.id, regimeId: request.params.rid};
    Workout.getPhases(params, function(err, phases){
      if(err){console.log('ERROR: Workout.getPhases', err);}
      reply({phases:phases}).code(err ? 418 : 200);
    });
  }
};
