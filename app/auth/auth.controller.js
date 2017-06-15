// angular.module('bootApp')
//   .controller('authController', authCtrl);
//
// authCtrl.$inject = ['$http', 'authFactory'];
//
// function authCtrl ($http, authFactory){
//   var auth = this;
//
//   auth.greeting = "hello world";
//
//   auth.register = function (){
//       if(auth.registerPassword != auth.confirmPassword){
//           console.log('nope')
//       } else {
//           authFactory
//             .register(auth.firstName, auth.registerEmail, auth.registerPassword)
//             .then()
//       };
//
//   };
// };