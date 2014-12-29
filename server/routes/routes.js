'use strict';

module.exports = [
  {method: 'get',    path: '/{param*}', config: require('./config/static/static')},
  {method: 'post',   path: '/register', config: require('./config/users/register')},
  {method: 'post',   path: '/login',    config: require('./config/users/login')},
  {method: 'delete', path: '/logout',   config: require('./config/users/logout')},
  {method: 'get',    path: '/status',   config: require('./config/users/status')},
  {method: 'post',   path: '/regimes',  config: require('./config/workouts/add_regime')}
];
