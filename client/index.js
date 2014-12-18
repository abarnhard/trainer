(function(){
  'use strict';

  angular.module('trainer', ['ui.router', 'angularFileUpload'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home',     {url:'/',         templateUrl:'/views/home/home.html',      controller:'HomeCtrl'})
        .state('register', {url:'/register', templateUrl:'/views/users/register.html', controller:'UsersCtrl'})
        .state('login',    {url:'/login',    templateUrl:'/views/users/login.html',    controller:'UsersCtrl'});
      }])
    .run(['$rootScope', '$http', function($rootScope, $http){
      $http.get('/status').then(function(res){
        $rootScope.rootuser = res.data;
      }, function(){
        $rootScope.rootuser = null;
      });
    }]);
})();
