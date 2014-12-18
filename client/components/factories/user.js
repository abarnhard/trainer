(function(){
  'use strict';

  angular.module('trainer')
    .factory('User', ['$http', '$upload', function($http, $upload){

      function register(user, avatar){
        if(avatar){
          var userData = {
            url: '/register',
            method: 'POST',
            data: user,
            file: avatar,
            fileFormDataName: 'avatar'
          };
          return $upload.upload(userData);
        }else{
          return $http.post('/register', user);
        }
      }

      function login(user){
        return $http.post('/login', user);
      }

      function logout(){
        return $http.delete('/logout');
      }

      return {register:register, login:login, logout:logout};
    }]);
})();
