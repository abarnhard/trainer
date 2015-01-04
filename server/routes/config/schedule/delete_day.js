'use strict';

var Schedule = require('../../../models/schedule'),
    Joi      = require('joi');

module.exports = {
  description: 'Delete a workout',
  tags:['workouts'],
  validate: {
    params: {
      id: Joi.number().min(1).required()
    }
  },
  handler: function(request, reply){
    var params = {userId:request.auth.credentials.id, dayId: request.params.id};
    Schedule.deleteDay(params, function(err, id){
      if(err){console.log('ERROR: Schedule.deleteDay', err);}
      reply({dayId:id}).code(err ? 418 : 200);
    });
  }
};
