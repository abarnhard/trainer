(function(){
  'use strict';

  angular.module('trainer')
  .controller('ScheduleCtrl', ['$scope', '$compile', 'Schedule', 'Workout', function($scope, $compile, Schedule, Workout){
    // initialize variables on scope
    $scope.liftDays         = [];
    $scope.regimes          = [];
    $scope.phases           = [];
    $scope.workouts         = [];
    $scope.regime           = null;
    $scope.phase            = null;
    $scope.selectedLiftDay  = null;
    $scope.selectedWorkout  = null;
    $scope.scheduledWorkout = null;

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
        $('#calendar').fullCalendar('destroy');
        angular.element('#calendar').fullCalendar({
          header: {
            left: 'today',
            center: 'title',
            right: 'prev,next'
          },
          height: 450,
          eventLimit: true,
          events: $scope.liftDays,
          eventClick: $scope.clickHandler,
          dayClick: $scope.clickHandler
        });
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
      $scope.$apply(function(){
        $scope.selectedLiftDay = $scope.liftDays[index];
      });
      showModal('#editModal');
      Workout.findByDayId($scope.selectedLiftDay.id).then(function(res){
        $scope.scheduledWorkout = res.data.workout;
      });
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
      var parts = date.split('-');
      date = new Date(parseInt(parts[0],10),parseInt(parts[1],10) - 1,parseInt(parts[2],10));
      $('#scheduleModal').foundation('reveal', 'close');
      Schedule.scheduleWorkout({workoutId: workoutId, phaseId: phaseId, date:date}).then(function(res){
        querySchedule();
      }, function(res){
        console.log('Something broke scheduleing that workout', res);
      });
    };

    // remove a workout from the schedule
    $scope.unscheduleDay = function(dayId){
      console.log(dayId);
      $('#editModal').foundation('reveal', 'close');
      Schedule.deleteDay(dayId).then(function(res){
        querySchedule();
      }, function(res){
        console.log('Something broke deleting that workout', res);
      });
    };

    // get all regimes for the user
    queryRegimes();

    // set event listeners to clear vars and query workouts/phases
    angular.element(document).on('closed.fndtn.reveal', function(e){
      // console.log('modal closed');
      $scope.selectedWorkout  = null;
      $scope.selectedDate     = null;
      $scope.scheduledWorkout = null;
      $scope.selectedLiftDay  = null;
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
      querySchedule();
    });
  }]);
})();
