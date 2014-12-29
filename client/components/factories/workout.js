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

      return {createRegime:createRegime, getRegimes:getRegimes};
    }]);
})();
