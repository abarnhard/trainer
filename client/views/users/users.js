(function(){
  'use strict';

  angular.module('trainer')
  .controller('UsersCtrl', ['$scope', '$state', 'User', function($scope, $state, User){
    $scope.user = {};
    $scope.mode = $state.current.name[0].toUpperCase() + $state.current.name.substring(1);

    if($scope.mode === 'logout'){
      User.logout().then(function(){
        toastr.success('User successfully logged out.');
        $state.go('home');
      });
    }

    $scope.submit = function(){
      if($scope.userForm.$valid){
        if($scope.mode === 'register'){
          User.register($scope.user).then(function(response){
            $state.go('login');
          }, function(){
            toastr.error('Error during registration.');
            $scope.user = {};
          });
        }else{
          User.login($scope.user).then(function(response){
            toastr.success('User successfully logged in.');
            $state.go('home');
          }, function(){
            toastr.error('Error during login.');
            $scope.user = {};
          });
        }
      }
    };
  }]);
})();
