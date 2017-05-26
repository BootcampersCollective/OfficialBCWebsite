angular.module('bc-site', ['ngRoute'])
  .config(Config);

Config.$inject = ['$routeProvider'];

function Config($routeProvider){

  $routeProvider


    .when('/auth', {
      templateUrl : '/html/auth.html',
      controller : 'authController',
      controllerAs : 'auth'
    })
}
