'use strict';

module.exports = [
  {method: 'get',    path: '/{param*}',             config: require('./config/static/static')},
  {method: 'post',   path: '/register',             config: require('./config/users/register')},
  {method: 'post',   path: '/login',                config: require('./config/users/login')},
  {method: 'delete', path: '/logout',               config: require('./config/users/logout')},
  {method: 'get',    path: '/status',               config: require('./config/users/status')},
  {method: 'get',    path: '/regimes',              config: require('./config/workouts/query_regimes')},
  {method: 'post',   path: '/regimes',              config: require('./config/workouts/add_regime')},
  {method: 'get',    path: '/regimes/{rid}/phases', config: require('./config/workouts/query_phases')},
  {method: 'post',   path: '/phases',               config: require('./config/workouts/add_phase')},
  {method: 'get',    path: '/phases/{id}/workouts', config: require('./config/workouts/query_workouts')},
  {method: 'post',   path: '/workouts',             config: require('./config/workouts/add_workout')}
];
