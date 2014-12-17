'use strict';

var Hapi           = require('hapi'),
    server         = new Hapi.Server(),
    routes         = require('./routes/routes'),
    plugins        = require('./lib/plugins'),
    authentication = require('./lib/authentication');

server.connection({port:process.env.PORT});

server.register(plugins, function(){
  server.auth.strategy('session', 'cookie', true, authentication);
  server.route(routes);
  server.start(function(){
    server.log('info', server.info.uri);
  });
});

module.exports = server;
