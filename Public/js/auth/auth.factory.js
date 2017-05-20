angular.module('bootApp')
  .factory('authFactory', authFactory)

  authFactory.$inject = ['$http'];


  function authFactory($http){

      function register(name,email,password){
        return $http({
            method: 'POST',
            url: '/register',
            data: {
            name:name,
            email:email,
            password:password
            }
        })
        }


      return{
          register:register
      };

  };