'use strict';

var Workout = require('../../../models/workout'),
    Joi     = require('joi');

module.exports = {
  description: 'Get the workout scheduled for a specific day',
  tags:['workouts', 'schedule'],
  validate: {
    params: {
      id: Joi.number().min(1).required()
    }
  },
  handler: function(request, reply){
    var params = {dayId: request.params.id};
    Workout.findByDay(params, function(err, workout){
      if(err){console.log('ERROR: Workout.findByDay', err);}
      reply({workout:workout}).code(err ? 418 : 200);
    });
  }
};
