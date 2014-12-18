(function(){
  'use strict';

  angular.module('trainer')
    .controller('FooterCtrl', ['$scope', function($scope){
      $scope.year = new Date().getFullYear();
    }]);
})();
