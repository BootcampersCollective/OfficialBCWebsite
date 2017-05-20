angular.module('bootApp')
      .controller('bootcamperController', bootcampersFunction)

// bootcamperController.$inject = ['bootcamperFact'];

bootcampersFunction.$inject = ['$http'];

function bootcampersFunction($http) {
    var bCtl = this;

    bCtl.title = "test!";

}
