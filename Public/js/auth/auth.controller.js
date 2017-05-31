angular.module('bootApp')
  .controller('authController', authCtrl);

authCtrl.$inject = ['$http', 'authFactory'];

function authCtrl ($http, authFactory){
  var auth = this;

// Register

  auth.register = function (){
      if(auth.registerPassword != auth.confirmPassword){
          console.log('nope')
      } else {
          authFactory
            .register(auth.firstName, auth.registerEmail, auth.registerPassword)
            .then(auth.register.success, auth.register.errors)
      };
  };

  auth.register.error = function(err){
    console.log(err);
  };

  auth.register.success = function(res){
    location.href ='#/dashboard'
  };

// Login

  auth.login = function(){
  authFactory
    .login(auth.email, auth.password)
    .then(auth.login.success, auth.login.error);
}

  auth.login.success = function(res){
    console.log(res.data)
  }

  auth.login.error = function(err){
    console.log(err.data);
  }
};