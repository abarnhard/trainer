(function(){
  'use strict';

  angular.module('trainer')
    .controller('WorkoutsIndexCtrl', ['$rootScope', '$scope', '$state', 'Workout', function($rootScope, $scope, $state, Workout){
      $scope.regimes = [];
      $scope.phases = [];
      $scope.workouts = [];
      $scope.regime = null;

      queryRegimes();

      $scope.initRegime = function(){
        $('#regimeModal').foundation('reveal', 'open');
      };

      $scope.createRegime = function(regime){
        Workout.createRegime(regime).then(function(res){
          $('#regimeModal').foundation('reveal', 'close');
          $scope.newRegime = '';
          queryRegimes();
        }, function(res){
          console.log('Something broke adding that regime', res);
          $('#regimeModal').foundation('reveal', 'close');
        });
      };

      function queryRegimes(){
        Workout.getRegimes().then(function(res){
          $scope.regimes = res.data;
        });
      }

    }]);
})();
