(function(){
  'use strict';

  angular.module('trainer')
    .controller('WorkoutsCtrl', ['$rootScope', '$scope', '$state', 'Workout', function($rootScope, $scope, $state, Workout){
      $scope.regimes  = [];
      $scope.phases   = [];
      $scope.workouts = [];
      $scope.regime   = null;
      $scope.phase    = null;

      function DefaultExercise(){
        this.reps   = {type:'1'};
        this.weight = {type:'1'};
      }

      function DefaultWorkoutGroup(){
        this.count = 1;
        this.exercises = [];
        this.exercises.push(new DefaultExercise());
        this.rest = 0;
      }

      function DefaultWorkout(){
        this.groups = [];
        this.groups.push(new DefaultWorkoutGroup());
      }

      function setDefaultNewWorkout(){
        $scope.newWorkout = new DefaultWorkout();
      }

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

      function queryWorkouts(phaseId){
        Workout.getWorkouts(phaseId).then(function(res){
          $scope.workouts = res.data.workouts;
        });
      }

      setDefaultNewWorkout();
      queryRegimes();

      $scope.$watch('regime', function(selectedRegime, oldVal){
        // console.log(selectedRegime, oldVal);
        if(selectedRegime){
          queryPhases(selectedRegime.id);
        }else{
          $scope.phases = [];
        }
      });

      $scope.$watch('phase', function(selectedPhase, oldVal){
        // console.log(selectedPhase, oldVal);
        if(selectedPhase){
          queryWorkouts(selectedPhase.id);
        }else{
          $scope.workouts = [];
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
        Workout.createWorkout(workout, $scope.phase.id).then(function(res){
          setDefaultNewWorkout();
          queryWorkouts($scope.phase.id);
          $('#workoutModal').foundation('reveal', 'close');
        }, function(res){
          console.log('Something broke adding that workout', res);
        });
      };

      $scope.addGroup = function(){
        $scope.newWorkout.groups.push(new DefaultWorkoutGroup());
      };

      $scope.removeGroup = function(groups, index){
        // console.log(groups, index);
        groups.splice(index, 1);
      };

      $scope.addExercise = function(group){
        group.exercises.push(new DefaultExercise());
      };

      $scope.removeExercise = function(exercises, index){
        // console.log(exercises, index);
        exercises.splice(index, 1);
      };

      $scope.validateReps = function(reps){
        if(reps.type === '3'){reps.count = 0;}
      };

      $scope.validateWeight = function(weight){
        if(weight.type === '2'){weight.lbs = 0;}
      };

    }]);
})();
