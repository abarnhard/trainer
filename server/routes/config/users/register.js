'use strict';

var Joi  = require('joi'),
    User = require('../../../models/user');

module.exports = {
  description: 'Register a User',
  tags:['users'],
  validate: {
    payload: {
      username: Joi.string().min(3).max(12).required(),
      email: Joi.string().min(4).required(),
      password: Joi.string().min(4).required(),
      file: [Joi.object(), Joi.any().allow(undefined)]
    }
  },
  payload:{
    maxBytes: 4194304, // 2^22 ; 4MB
    output: 'stream',
    parse: true,
    timeout: 60000
  },
  auth: false,
  handler: function(request, reply){
    User.register(request.payload, function(err, user){
      if(err){console.log('ERROR: User.register', err);}
      if(user){request.auth.session.set(user);}
      reply(user).code(err ? 400 : 200);
    });
  }
};
