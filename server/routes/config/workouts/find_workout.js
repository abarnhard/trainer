'use strict';

var Workout = require('../../../models/workout'),
    Joi     = require('joi');

module.exports = {
  description: 'Get the workout by its id',
  tags:['workouts'],
  validate: {
    params: {
      id: Joi.number().min(1).required()
    }
  },
  handler: function(request, reply){
    var params = {wkId: request.params.id};
    Workout.findById(params, function(err, workout){
      if(err){console.log('ERROR: Workout.findById', err);}
      reply({workout:workout}).code(err ? 418 : 200);
    });
  }
};
