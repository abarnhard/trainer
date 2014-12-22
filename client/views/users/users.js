(function(){
  'use strict';

  angular.module('trainer')
  .controller('UsersCtrl', ['$scope', '$state', 'User', function($scope, $state, User){
    $scope.user = {};
    $scope.mode = $state.current.name[0].toUpperCase() + $state.current.name.substring(1);

    if($scope.mode === 'logout'){
      User.logout().then(function(){
        $state.go('home');
      });
    }

    $scope.submit = function(){
      if($scope.userForm.$valid){
        if($state.current.name === 'register'){
          User.register($scope.user, $scope.avatar[0]).then(function(response){
            $state.go('login');
          }, function(){
            // $scope.user = {};
          });
        }else{
          User.login($scope.user).then(function(response){
            $state.go('home');
          }, function(){
            $scope.user = {};
          });
        }
      }
    };
  }]);
})();
