(function(){
  'use strict';

  angular.module('trainer')
    .factory('Workout', ['$http', function($http){

      function createRegime(regime){
        return $http.post('/regimes', {name: regime});
      }

      function getRegimes(){
        return $http.get('/regimes');
      }

      function createPhase(phase, regimeId){
        return $http.post('/phases', {name: phase, regimeId:regimeId});
      }

      function getPhases(regimeId){
        return $http.get('/regimes/' + regimeId + '/phases');
      }

      return {createRegime:createRegime, getRegimes:getRegimes, createPhase:createPhase, getPhases:getPhases};
    }]);
})();
