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

      function createWorkout(workout, phaseId){
        return $http.post('/workouts', {workout: workout, phaseId:phaseId});
      }

      function deleteWorkout(id){
        return $http.delete('/workouts/' + id);
      }

      function getWorkouts(phaseId){
        return $http.get('/phases/' + phaseId + '/workouts');
      }

      return {
        createRegime:createRegime,
        getRegimes:getRegimes,
        createPhase:createPhase,
        getPhases:getPhases,
        createWorkout:createWorkout,
        deleteWorkout:deleteWorkout,
        getWorkouts:getWorkouts
      };
    }]);
})();
