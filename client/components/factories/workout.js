(function(){
  'use strict';

  angular.module('trainer')
    .factory('Workout', ['$http', function($http){

      function createRegime(regime){
        var body = {name: regime};
        console.log(body);
        return $http.post('/regimes', body);
      }

      return {createRegime:createRegime};
    }]);
})();
