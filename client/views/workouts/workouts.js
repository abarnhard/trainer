(function(){
  'use strict';

  angular.module('trainer')
    .controller('WorkoutsCtrl', ['$rootScope', '$scope', '$state', 'Workout', function($rootScope, $scope, $state, Workout){
      $scope.regimes    = [];
      $scope.phases     = [];
      $scope.workouts   = [];
      $scope.newWorkout = {groups:[{count:1, excercises:[{reps: {type:'1'}, weight: {type:'1'}}], rest:0}]};
      $scope.regime     = null;
      $scope.phase      = null;

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
          queryPhases($scope.regime.id);
        }, function(res){
          console.log('Something broke adding that phase', res);
          $('#phaseModal').foundation('reveal', 'close');
        });
      };

      $scope.createWorkout = function(workout){
        console.log(workout);
      };

      $scope.addGroup = function(){
        var group = {count:1, excercises:[{reps: {type:'1'}, weight: {type:'1'}}], rest:0};
        $scope.newWorkout.groups.push(group);
      };

      $scope.removeGroup = function(groups, index){
        // console.log(groups, index);
        groups.splice(index, 1);
      };

      $scope.addExcercise = function(group){
        var excercise = {reps:{type:'1'}, weight:{type:'1'}};
        group.excercises.push(excercise);
      };

      $scope.removeExcercise = function(excercises, index){
        // console.log(excercises, index);
        excercises.splice(index, 1);
      };

      $scope.validateReps = function(reps){
        if(reps.type === '3'){
          reps.count = 0;
        }
      };

      $scope.validateWeight = function(weight){
        if(weight.type === '2'){
          weight.lbs = 0;
        }
      };

    }]);
})();
