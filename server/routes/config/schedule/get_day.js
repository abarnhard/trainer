'use strict';

var Schedule = require('../../../models/schedule'),
    Joi      = require('joi');

module.exports = {
  description: 'Get 1 scheduled workouts for user',
  tags:['workouts', 'schedule'],
  validate: {
    params: {
      date: Joi.string().required()
    }
  },
  cors: {
    origin: ['http://localhost:8100'],
    credentials: true
  },
  handler: function(request, reply){
    console.log(request.params.date);
    var date   = convertStringToDate(request.params.date),
        params = {date: date, userId:request.auth.credentials.id};
    Schedule.findOne(params, function(err, day){
      if(err || !day){console.log('ERROR: Schedule.findOne', err);}
      reply({day:day}).code(err ? 418 : 200);
    });
  }
};

// HELPER FUNCTIONS //
function convertStringToDate(s){
  var parts = s.split('-');
  return new Date(parseInt(parts[0],10),parseInt(parts[1],10) - 1,parseInt(parts[2],10));
}
