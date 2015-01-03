(function(){
  'use strict';

  angular.module('trainer')
  .controller('ScheduleCtrl', ['$scope', 'Schedule', function($scope, Schedule){
    $scope.workouts = [
      {
        id: 1,
        title: 'All Day Event',
        start: '2015-01-02',
        allDay: true
      }
    ];

    function clickHandler(obj){
      if(obj.title){
        console.log('event click', obj.id, obj.start.format());
      }else{
        console.log('day click', obj.format(), $scope.workouts[0].start, obj.format() === $scope.workouts[0].start);
        if(false){
          console.log('Day has event scheduled');
        }
      }
      // console.log(isValidDate(obj), Object.prototype.toString.call(obj), obj.title);
    }

    angular.element(document).ready(function(){
      angular.element('#calendar').fullCalendar({
        header: {
          left: 'today',
          center: 'title',
          right: 'prev,next'
        },
        editable: false,
        eventLimit: true,
        events: $scope.workouts,
        eventClick: clickHandler,
        dayClick: clickHandler
        // eventClick: function(calEvent){console.log('event click',calEvent, calEvent.start.format());},
        // dayClick: function(date){console.log('day click',date.format());},
      });
    });
  }]);
})();
