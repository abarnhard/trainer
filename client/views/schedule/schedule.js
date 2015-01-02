(function(){
  'use strict';

  angular.module('trainer')
  .controller('ScheduleCtrl', ['$rootScope', '$scope', '$state', 'Schedule', function($rootScope, $scope, $state, Schedule){
    $scope.scheduledWorkouts = {events:[{title:'Test', start:'2015-01-02'}]};
    $('#schedule').fullCalendar({
      dayClick: function(){
        alert('a day has been clicked!');
      }
    });
  }]);

})();
