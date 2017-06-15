const home = {
	bindings: {
		
	},
	controller: function () {
		let ctrl = this;
		ctrl.title = "Bootcampers Collective";
		
		ctrl.$onInit = function () {};
		ctrl.$postLink = function () {};
	},
	template: ` <h1>{{$ctrl.title}}</h1>
<layout-component></layout-component>`
};

angular.module('bc-site.home')
	.component('home', home);

home.$inject = [];
