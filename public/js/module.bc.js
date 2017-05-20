angular.module('bootApp', ['ngRoute'])
    .config(angularRouter)

angularRouter.$inject = ['$routeProvider']
function angularRouter ($routeProvider) {
    $routeProvider
        .when('/',
            {
                templateUrl: '/partials/home.html',
                controller: 'bootcamperController',
                controllerAs: 'bCtl',
            })
        .when('/about',
            {
                templateUrl: '/partials/about.html',
            });

}
