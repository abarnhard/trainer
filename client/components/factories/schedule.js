(function(){
  'use strict';

  angular.module('trainer')
    .factory('Schedule', ['$http', function($http){
      function scheduleWorkout(data){
        return $http.post('/workouts/schedule', data);
      }

      function query(){
        return $http.get('/workouts/schedule');
      }

      function deleteDay(dayId){
        return $http.delete('/workouts/day/' + dayId);
      }

      return {
        scheduleWorkout: scheduleWorkout,
        query: query,
        deleteDay: deleteDay
      };
    }]);
})();
