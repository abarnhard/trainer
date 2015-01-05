'use strict';

var Schedule = require('../../../models/schedule'),
    Joi      = require('joi');

module.exports = {
  description: 'Get 1 scheduled workouts for user',
  tags:['workouts', 'schedule'],
  validate: {
    params: {
      date: Joi.date().required()
    }
  },
  cors: {
    origin: ['http://localhost:8100'],
    credentials: true
  },
  handler: function(request, reply){
    var params = {date: request.params.date, userId:request.auth.credentials.id};
    Schedule.findOne(params, function(err, schedule){
      if(err){console.log('ERROR: Workout.getPhases', err);}
      reply({schedule:schedule}).code(err ? 418 : 200);
    });
  }
};
