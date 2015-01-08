'use strict';

var Schedule = require('../../../models/schedule'),
    Joi      = require('joi');

module.exports = {
  description: 'Get 1 scheduled workouts for user',
  tags:['workouts', 'schedule'],
  validate: {
    payload: {
      dayId: Joi.number().min(1).required()
    }
  },
  cors: {
    origin: ['http://localhost:8100'],
    credentials: true
  },
  handler: function(request, reply){
    console.log(request.payload);
    var params = {dayId: request.payload.dayId, userId:request.auth.credentials.id};
    Schedule.markDayComplete(params, function(err, dayId){
      if(err || !dayId){console.log('ERROR: Schedule.markDayComplete', err);}
      reply({dayId:dayId}).code(err ? 418 : 200);
    });
  }
};
