(function(){
  'use strict';

  angular.module('trainer')
    .controller('WorkoutsIndexCtrl', ['$rootScope', '$scope', '$state', 'User', function($rootScope, $scope, $state, User){
      $scope.regimes = [];
      $scope.phases = [];
      $scope.workouts = [];
      $scope.regime = null;

      $scope.initRegime = function(){
        $('#regimeModal').foundation('reveal', 'open');
      };

      $scope.createRegime = function(regime){
        console.log(regime);
        $('#regimeModal').foundation('reveal', 'close');
      };
    }]);
})();
