(function(){
  'use strict';

  angular.module('trainer')
  .controller('ScheduleCtrl', ['$scope', 'Schedule', 'Workout', function($scope, Schedule, Workout){
    // initialize variables on scope
    $scope.liftDays        = [];
    $scope.regimes         = [];
    $scope.phases          = [];
    $scope.workouts        = [];
    $scope.regime          = null;
    $scope.phase           = null;
    $scope.selectedLiftDay = null;
    $scope.selectedWorkout = null;
    /*
      {
        id: 1,
        title: 'All Day Event',
        start: '2015-01-02',
        allDay: true
      }
    */
    // define querys for workouts modals
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

    // function to get all scheduled workouts
    function querySchedule(){
      Schedule.query().then(function(res){
        $scope.liftDays = res.data.schedule;
      });
    }

    // selector function for adding a workout to the schedule
    $scope.selectWorkout = function(workout){
      $scope.selectedWorkout = workout;
    };

    // define functions to handle clicking on a calendar day/event
    function hasEventScheduled(day, events){
      var scheduled = events.some(function(e){
        return e.start === day.format();
      });
      return scheduled;
    }

    function findEventIndex(day, events){
      return events.map(function(e){return e.start;}).indexOf(day.format());
    }

    function showModal(modalId){
      $(modalId).foundation('reveal', 'open');
    }

    function editEvent(obj){
      // input is either a moment object or an event object with a moment date in .start
      var index = findEventIndex((obj.start || obj), $scope.liftDays);
      $scope.$apply(function(){$scope.selectedLiftDay = $scope.liftDays[index];});
      showModal('#editModal');
    }

    $scope.clickHandler = function(obj){
      // if it has a title, user clicked on an event
      if(obj.title){
        editEvent(obj);
      }else{
        if(hasEventScheduled(obj, $scope.liftDays)){
          editEvent(obj);
        }else{
          $scope.$apply(function(){$scope.selectedDate = obj.format();});
          showModal('#scheduleModal');
        }
      }
    };

    // add a workout to the schedule
    $scope.addToSchedule = function(workoutId, phaseId, date){
      console.log(workoutId, date);
      $('#scheduleModal').foundation('reveal', 'close');
      Schedule.scheduleWorkout({workoutId: workoutId, phaseId: phaseId, date:date}).then(function(res){
        querySchedule();
      }, function(res){
        console.log('Something broke scheduleing that workout', res);
      });
    };

    // get all regimes for the user
    queryRegimes();

    // set event listeners to clear vars and query workouts/phases
    angular.element(document).on('closed.fndtn.reveal', function(e){
      // console.log('modal closed');
      $scope.selectedWorkout = $scope.selectedDate = $scope.selectedWorkout = null;
    });

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

    // initalize and load calendar widget
    angular.element(document).ready(function(){
      angular.element('#calendar').fullCalendar({
        header: {
          left: 'today',
          center: 'title',
          right: 'prev,next'
        },
        height: 450,
        editable: false,
        eventLimit: true,
        events: $scope.liftDays,
        eventClick: $scope.clickHandler,
        dayClick: $scope.clickHandler
      });
    });
  }]);
})();
