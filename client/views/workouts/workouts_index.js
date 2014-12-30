(function(){
  'use strict';

  angular.module('trainer')
    .controller('WorkoutsIndexCtrl', ['$rootScope', '$scope', '$state', 'Workout', function($rootScope, $scope, $state, Workout){
      $scope.regimes  = [];
      $scope.phases   = [];
      $scope.workouts = [];
      $scope.regime   = null;
      $scope.phase    = null;

      function queryRegimes(){
        Workout.getRegimes().then(function(res){
          $scope.regimes = res.data.regimes;
        });
      }

      function queryPhases(regimeId){
        Workout.getPhases(regimeId).then(function(res){
          $scope.phases = res.data.phases;
        });
      }

      queryRegimes();

      $scope.$watch('regime', function(selectedRegime, oldVal){
        // console.log(selectedRegime, oldVal);
        if(selectedRegime){
          queryPhases(selectedRegime.id);
        }else{
          $scope.phases = [];
        }
      });

      $scope.showModal = function(modalId){
        $(modalId).foundation('reveal', 'open');
      };

      $scope.createRegime = function(regimeName){
        Workout.createRegime(regimeName).then(function(res){
          $('#regimeModal').foundation('reveal', 'close');
          $scope.newRegime = '';
          queryRegimes();
        }, function(res){
          console.log('Something broke adding that regime', res);
          $('#regimeModal').foundation('reveal', 'close');
        });
      };

      $scope.createPhase = function(phaseName){
        Workout.createPhase(phaseName, $scope.regime.id).then(function(res){
          $('#phaseModal').foundation('reveal', 'close');
          $scope.newPhase = '';
          queryPhases();
        }, function(res){
          console.log('Something broke adding that phase', res);
          $('#phaseModal').foundation('reveal', 'close');
        });
      };

    }]);
})();
