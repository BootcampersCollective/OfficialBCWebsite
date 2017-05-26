angular.module('bootApp', ['ngRoute'])
    .config(angularRouter)

angularRouter.$inject = ['$routeProvider']
function angularRouter ($routeProvider) {
    $routeProvider
        .when('/',
            {
                templateUrl: '/partials/placeholder.html',
                controller: 'bootcamperController',
                controllerAs: 'bCtl',
            })

        .when('/about',
            {
                templateUrl: '/partials/about.html',
            })

        .when('/auth', {
                templateUrl : '/partials/auth.html',
                controller : 'authController',
                controllerAs : 'auth'
<<<<<<< HEAD
                })

        .when('/events', {
                templateUrl : '/partials/event.html',
                });
=======
            })
            
        .when('/dashboard',
            {
                templateUrl: '/partials/dashboard.html',
            })
>>>>>>> commiting

}
