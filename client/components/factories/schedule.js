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

      return {
        scheduleWorkout: scheduleWorkout,
        query: query
      };
    }]);
})();
