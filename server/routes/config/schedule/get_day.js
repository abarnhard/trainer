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
    Schedule.findOne(params, function(err, day){
      if(err || !day){console.log('ERROR: Schedule.findOne', err);}
      reply({day:day}).code(err ? 418 : 200);
    });
  }
};
